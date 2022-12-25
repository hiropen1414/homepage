import { Button as AntButton } from 'antd';
import React from 'react';
type Props = {
  label: string;
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>
}
export const Button = (props: Props) => {
  return (
    <AntButton type={props.type} onClick={props.onClick} style={props.style}>
      {props.label}
    </AntButton>
  );
};