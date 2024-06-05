import { TableColumnsType } from "antd";
export interface DataType {
  key: React.Key;
  address: string;
  size: string;
  phone: string;
}
export const columns: TableColumnsType<DataType> = [
  {
    title: '地址(address)',
    dataIndex: 'address',
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