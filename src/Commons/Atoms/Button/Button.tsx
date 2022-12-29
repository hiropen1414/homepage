import { Button as AntButton } from 'antd';
import React, { ReactNode } from 'react';
type Props = {
  label: string;
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  style?: React.CSSProperties;
  icon?: ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLElement>
}
export const Button = (props: Props) => {
  return (
    <AntButton icon={props.icon} type={props.type} onClick={props.onClick} style={props.style}>
      {props.label}
    </AntButton>
  );
};