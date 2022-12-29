import { Input } from 'antd';

type Props={
  holder?:string;
}

export const Search = (props:Props) => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <Search placeholder={props.holder} onSearch={onSearch} style={{ width: 200 }} />
  );
};