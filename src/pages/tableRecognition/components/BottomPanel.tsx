import { Button } from 'antd'
import { memo } from 'react'
import { BottomPanelWapper } from './style/BottomPanelWapper'
interface BottomPanelProps {
  disabled?: boolean,
  startOperational: () => void
}
const BottomPanel = memo((props:BottomPanelProps) => {
  return (
    <BottomPanelWapper>
       <Button type={'primary'} size={'large'} disabled={props.disabled} onClick={props.startOperational} >开始识别</Button>
    </BottomPanelWapper>
  )
})

export default BottomPanel