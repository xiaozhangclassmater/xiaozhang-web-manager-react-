import { InboxOutlined } from '@ant-design/icons';
import { Upload, UploadProps } from "antd";
import { memo } from 'react';
import { UploadFileWapper } from './style/uploadFile.ts';
const { Dragger } = Upload;
interface UploadFileProps {
  saveUploadFile: (file: any) => void
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
      <Dragger customRequest={customUploadFileHandle}  onChange={uploadFileFinishChange} >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击选择你需要识别的图片</p>
        <p className="ant-upload-hint">
          支持拖拽上传
        </p>
      </Dragger>
    </UploadFileWapper>
  )
})

export default UploadFile