import Loading from '@/components/Loading/index.tsx';
import { useLoading } from '@/hooks';
import type { UploadFile as UploadFileType } from 'antd';
import { message, UploadProps } from "antd";
import axios from 'axios';
import Md5 from 'md5';
import React, { useMemo, useState } from "react";
import BottomPanel from './components/BottomPanel.tsx';
import TablePanel from './components/TablePanel.tsx';
import UploadFile from "./components/UploadFile.tsx";
import UploadPanel from './components/UploadPanel.tsx';
import { TableRecognitionWapper } from "./style/index";
interface NumberkeyMapType<T = string> {
  [key: number]: T
}
export interface recognizeTableData{
  key: React.Key,
  address: string,
  size: string,
  phone: string
}
interface RecognizeTableRes  {
  code: number,
  data: NumberkeyMapType<string[]>,
  message: string
}
/**
 * 请求识别表格处理函数
 */
const buildAuthorizationField = () => {
  const date = new Date()
  const todayTime = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`
  return Md5(`zqy-yzw${todayTime}`)
}

const TableRecognition: React.FC = () => {
  const { loadingState, setLoadingState } = useLoading()
  const [ showTablePanel, setShowTablePanel ] = useState(false)
  const [ imageList, setImageList] = useState<string[]>([]) 
  const [ uploadFile, setUploadFile] = useState<UploadFileType[]>()
  const [ recognizeTableData, setRecognizeTableData] = useState<recognizeTableData[]>([])
  const disabledStartRecognize = useMemo(() => !uploadFile?.length, [uploadFile])
  const exportDisabled = useMemo(() => !recognizeTableData.length, [recognizeTableData])
  const startOperational = async () => {
    if (!uploadFile?.length){
      return
    }
    setLoadingState(true)
    const formData = new FormData()
    for (let i = 0; i < (uploadFile?.length || 0); i++) {
      formData.append('multipartFile', uploadFile[i].originFileObj as File)
    }
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: buildAuthorizationField()
    }
    let res = null 
    try {
      res = await axios.post<RecognizeTableRes>('/yangziwangApi/image/ocr', formData, { headers })
    } catch (error) {
      message.error("网络异常")
    }
    // res = {
    //   data: {
    //     data: {
    //       "11": [
    //           "杭州市余杭区东湖街道博宸君府7幢2单元502室",
    //           "129.27",
    //           "15224080713"
    //       ],
    //       "12": [
    //           "杭州市余杭区东湖街道博宸君府7幢3单元101室",
    //           "128.83",
    //           "13588859338"
    //       ],
    //       "0": [
    //           "杭州市余杭区东湖街道博宸君府7幢1单元101室",
    //           "133.88",
    //           "13735506875"
    //       ],
    //       "1": [
    //           "杭州市余杭区东湖街道博宸君府7幢1单元102室",
    //           "128.83",
    //           "15924111936"
    //       ],
    //       "2": [
    //           "杭州市余杭区东湖街道博宸君府7幢1单元301室",
    //           "138.42",
    //           "13816119198"
    //       ],
    //       "3": [
    //           "杭州市余杭区东湖街道博宸君府7幢1单元302室",
    //           "132.74",
    //           "13567247521"
    //       ],
    //       "4": [
    //           "杭州市余杭区东湖街道博宸君府7幢1单元501室",
    //           "134.95",
    //           "13777593789"
    //       ],
    //       "5": [
    //           "杭州市余杭区东湖街道博宸君府7幢1单元502室",
    //           "129.27",
    //           "15757138596"
    //       ],
    //       "6": [
    //           "杭州市余杭区东湖街道博宸君府7幢2单元101室",
    //           "128.83",
    //           "13282134368"
    //       ],
    //       "7": [
    //           "杭州市余杭区东湖街道博宸君府7幢2单元102室",
    //           "128.83",
    //           "15869118855"
    //       ],
    //       "8": [
    //           "杭州市余杭区东湖街道博宸君府7幢2单元301室",
    //           "132.74",
    //           "18667127768"
    //       ],
    //       "9": [
    //           "杭州市余杭区东湖街道博宸君府7幢2单元302室",
    //           "132.74",
    //           "15924100017"
    //       ],
    //       "10": [
    //           "杭州市余杭区东湖街道博宸君府7幢2单元501室",
    //           "129.27",
    //           "13605717418"
    //       ]
    //   },
    //   code: 200
    // }
    // }
    const { data: recognizeData, code } = res?.data as any
    if (code === 200 && recognizeData){
      const webCreateFieldMap = ['address', 'size', 'phone']
      const transformRecognizeData = []
      let index = 0
      for (const key in recognizeData) {
        const recognizeList = recognizeData[key] as string[]
        const transMap:any = {}
        for (let i = 0; i < recognizeList.length; i++) {
          const key = webCreateFieldMap[i] // 获得一个映射的key 字段
          transMap[key] = recognizeList[i]
        }
        index = index + 1
        
        transformRecognizeData.push({key: index, ...transMap})
      }
      setRecognizeTableData(transformRecognizeData)
      setShowTablePanel(!!transformRecognizeData.length)
      setLoadingState(false)
    }
  }
  const saveUploadFile: UploadProps['onChange'] = (info) => {
    const files = info.fileList
    setUploadFile(files)
    if (!files?.length) {
      return
    }
    const readerImages:string[] = []
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader()
      const readerLoadCallback = (e: ProgressEvent<FileReader>)  => {
        readerImages.push(e.target?.result as string)
        setImageList(readerImages)
      }
      reader.readAsDataURL(files[i].originFileObj as File)
      reader.addEventListener('load', readerLoadCallback)
    }
  }
  return (
    <TableRecognitionWapper className="table-Recognition-wapper">
      <BottomPanel tableDataSource={recognizeTableData} disabled={disabledStartRecognize} exportDisabled={exportDisabled} startOperational={startOperational}/>
      <div className="title-wapper">文字提取技术(OCR)</div>
      <UploadFile imageList={imageList}  saveUploadFile={saveUploadFile}/>
      {showTablePanel ? <TablePanel tableDataSource={recognizeTableData}/> : <UploadPanel tableData={recognizeTableData} /> }
       {loadingState && <Loading/>}
    </TableRecognitionWapper>
  )
};

export default TableRecognition;

