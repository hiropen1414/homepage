import { ColProps, Form as AntForm } from 'antd';
import { ReactNode } from 'react';

type Props = {
  labelCol?: ColProps;
  style?: React.CSSProperties;
  children: ReactNode;
}

export const Form = (props:Props) => {
  return (
    <AntForm
      labelCol={props.labelCol}
      style={props.style}
    >
      {props.children}
    </AntForm>
  );
};