import { type } from '@testing-library/user-event/dist/type';
import {Input as AntInput} from 'antd';

type Props={
  placeholder?:string;
}

export const Input = (props:Props) => {
  return(
    <AntInput
      placeholder={props.placeholder ?? undefined}
    />
  );
}