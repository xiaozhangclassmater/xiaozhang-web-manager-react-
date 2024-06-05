import { exportExcel } from '@/utils'
import { Button } from 'antd'
import { memo } from 'react'
import { DataType } from '../static'
import { BottomPanelWapper } from './style/BottomPanelWapper'
interface BottomPanelProps {
  disabled?: boolean,
  exportDisabled: boolean
  tableDataSource: DataType[]
  startOperational: () => void
}
const BottomPanel = memo((props:BottomPanelProps) => {
  const exportRecognizeTableData = () => {
    exportExcel(props.tableDataSource, '识别数据')

  }
  return (
    <BottomPanelWapper>
      <Button type={'primary'} size={'large'} disabled={props.exportDisabled} onClick={exportRecognizeTableData} style={{ marginRight: 10 }} >导出数据</Button>
      <Button type={'primary'} size={'large'} disabled={props.disabled} onClick={props.startOperational} >开始识别</Button>
    </BottomPanelWapper>
  )
})

export default BottomPanel