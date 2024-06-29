import { TableColumnsType } from "antd";
export interface DataType {
  key: React.Key;
}
export const columns: TableColumnsType<DataType> = [
  {
    title: '地址(address)',
    dataIndex: 'Field1',
    width: '30%',
  },
  {
    title: '平方数大小(size)',
    dataIndex: 'size',
  },
  {
    title: '客户号码(phone)',
    dataIndex: 'phone',
    width: '40%',
  },
];