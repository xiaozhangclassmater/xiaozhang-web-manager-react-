import { memo } from 'react'
import { recognizeTableData } from '..'
import TopcatImage from '../assets/topcat.png'
import { UploadPanelWapper } from './style/uploadPanel'
interface UploadPanelProps {
  tableData: recognizeTableData[]
}
const UploadPanel = memo((props: UploadPanelProps) => {
  console.log('props', props.tableData);
  return (
    <UploadPanelWapper>
      <div className='panel-image'>
        <img src={TopcatImage} className='topcat-image-wapper' alt="" />
      </div>
      <div className='desc'>
        <div> 点击上方按钮选择图片 / 将图片拖入此虚线框 / 从剪切板粘贴截图最多可选择50张,</div>
        <div>支持 JPG/PNG/BMP/GIF/SVG 格式</div>
      </div>
    </UploadPanelWapper>
  )
})

export default UploadPanel