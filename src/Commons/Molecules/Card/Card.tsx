import { Card as AntCard } from 'antd';
import { CSSProperties, ReactNode } from 'react';


type Props = {
  border?: boolean;
  style?: React.CSSProperties;
  element?: ReactNode;
  boxStyle?: CSSProperties;
  text?: string;
  title?: ReactNode;
  cardTextStyle?: CSSProperties;
  row?: {
    colSpan?: number;
  }
}

export const Card = (props: Props) => {
  return (
    <div style={props.boxStyle}>
      <AntCard
        bordered={props.border}
        bodyStyle={props.style}
        cover={props.element ?? null}
      >
        {props.title}
        <p style={props.cardTextStyle}>
          {props.text}
        </p>
      </AntCard >
    </div >
  );
};