import { Table as AntTable } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { DataType } from './dataType';

type Props = {
  dataSource: DataType[];
  bordered?: boolean;
  pagiNation?: false | TablePaginationConfig;
  columns: ColumnsType<DataType>;
}

export const Table = (props: Props) => {

  return (
    <AntTable
      pagination={props.pagiNation}
      columns={props.columns}
      bordered={props.bordered}
      dataSource={props.dataSource}
    />
  );
};