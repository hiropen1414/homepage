import { Button as AntButton } from 'antd';
import React, { ReactNode } from 'react';
type Props = {
  label: string;
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  style?: React.CSSProperties;
  htmlType?: 'button' | 'submit' | 'reset';
  icon?: ReactNode | string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>
}
export const Button = (props: Props) => {
  return (
    <AntButton
      className={props.className}
      icon={props.icon}
      type={props.type}
      onClick={props.onClick}
      style={props.style}
      htmlType={props.htmlType}
    >
      {props.label}
    </AntButton>
  );
};