import { Table, TableProps } from 'antd';
import { memo } from 'react';
import { columns, DataType } from '../static';
import { TablePanelWapper } from './style/TablePanel';
interface TablePanelProps {
  tableDataSource: DataType[]
}
const TablePanel = memo((props:TablePanelProps) => {
  const changeHandle: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <TablePanelWapper>
      <Table columns={columns} dataSource={props.tableDataSource} onChange={changeHandle} />
    </TablePanelWapper>
  )
})

export default TablePanel