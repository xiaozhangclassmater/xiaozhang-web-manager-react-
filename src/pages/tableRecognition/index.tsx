
import { UploadProps } from "antd";
import axios from 'axios';
import React from "react";
import BottomPanel from './components/BottomPanel.tsx';
import UploadFile from "./components/UploadFile.tsx";
import UploadPanel from './components/UploadPanel.tsx';
import { TableRecognitionWapper } from "./style/index";
let uploadFile:any = null
const saveUploadFile:UploadProps['onChange'] = (info) => {
  uploadFile = info.fileList
}
/**
 * 请求识别表格处理函数
 */
const buildAuthorizationField = () => {
  const UTCDATE = Date.now()
  return `TC3-HMAC-SHA256 签名凭证=SecretId/${UTCDATE}/ocr/tc3_request, SignedHeaders=content-type;host, `
}
const requestRecognizeTableHandle = () => {
  const dataParams = {

  }
  const authorizationField = buildAuthorizationField()
  const headers = {
    'X-TC-Action': 'RecognizeTableAccurateOCR', // 接口名称
    'X-TC-Region': 'ap-shanghai', //地区
    'X-TC-Timestamp': Date.now(),
    "X-TC-Version": '2018-11-19',
    Authorization: authorizationField
  }
  axios.post('/yangziInterface', {
    headers,
    data: dataParams
  })
}
const startOperational = () => {
  if (!uploadFile){
    return 
  }
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile[0].originFileObj)
  function loadEndCallback (e: ProgressEvent<FileReader>) {
     const uploadFileBase64Url = e.target?.result as string
    console.log('uploadFileBase64Url', uploadFileBase64Url);
    requestRecognizeTableHandle()
  }
  reader.addEventListener('loadend', loadEndCallback)
  
}
const TableRecognition: React.FC = () => {
  
  return (
    <TableRecognitionWapper className="table-Recognition-wapper">
      <BottomPanel startOperational={startOperational}/>
      <div className="title-wapper">文字提取技术(OCR)</div>
      <UploadFile saveUploadFile={saveUploadFile}/>
      <UploadPanel/>
    </TableRecognitionWapper>
  )
};

export default TableRecognition;
