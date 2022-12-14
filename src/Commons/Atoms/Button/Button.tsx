import { Button as AntButton } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
type Props = {
  link: string;
  label:string;
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  style?:React.CSSProperties;
}
export const Button = (props: Props) => {
  const navigation = useNavigate();
  const onClick = () => {
    navigation(props.link);
  }

  return (
    <AntButton type={props.type} onClick={onClick} style={props.style}>
      {props.label}
    </AntButton>
  );
}