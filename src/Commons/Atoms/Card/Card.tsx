import { Card as AntCard } from 'antd';
import { ReactNode } from 'react';


type Props = {
  border?: boolean;
  style?: React.CSSProperties;
  element?: ReactNode;
  hoverAble?: boolean;
  content?: ReactNode;
}

export const Card = (props: Props) => {
  return (
    <AntCard
      bordered={props.border}
      bodyStyle={props.style}
      cover={props.element ?? null}
      hoverable={props.hoverAble}
    >
      {props.content}
    </AntCard >
  );
};