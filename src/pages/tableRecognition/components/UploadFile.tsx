import { InboxOutlined } from '@ant-design/icons';
import { Image, Upload, UploadProps } from "antd";
import { memo } from 'react';
import { UploadFileWapper } from './style/uploadFile.ts';
const { Dragger } = Upload;
interface UploadFileProps {
  saveUploadFile: (file: any) => void,
  imageList: string[]
}
const UploadFile = memo((props: UploadFileProps) => {
  // const [fileList, setFileList] = useState<any[]>([])
  const customUploadFileHandle = () => {
    // console.log('fileList', fileList);
  }
  const uploadFileFinishChange:UploadProps['onChange'] = (info) => {
    props.saveUploadFile(info)
  }
  return (
    <UploadFileWapper>
      <Dragger customRequest={customUploadFileHandle}  onChange={uploadFileFinishChange} multiple >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击选择你需要识别的图片</p>
        <p className="ant-upload-hint">
          支持拖拽上传
        </p>
      </Dragger>
      <div className='upload-image-list'>
        {
          props.imageList.map((item, index) => {
            return (
              <div className='image-item' key={index} >
                <Image src={item} />
              </div>
            )
          })
        }
        
      </div>
    </UploadFileWapper>
  )
})

export default UploadFile