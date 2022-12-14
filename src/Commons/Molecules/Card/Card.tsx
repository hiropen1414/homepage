import { Card as AntCard, Col, ImageProps, Row } from 'antd';
import { CSSProperties, ReactNode } from 'react';
import { Image } from '../../Atoms/Image/Image';


type Props = {
  border?: boolean;
  style?: React.CSSProperties;
  cover?: string;
  imgStyle?: ImageProps;
  boxStyle?: CSSProperties;
  text?: string;
  title?: string | ReactNode;
}

export const Card = (props: Props) => {
  console.log(props.boxStyle);
  return (
    <div style={props.boxStyle}>
      <AntCard
        title={props.title}
        bordered={props.border}
        bodyStyle={props.style}
      >
        <Row>
          <Col span={12}>{props.cover ? <Image src={props.cover} preview={false} styles={props.imgStyle} /> : null}</Col>
          <Col span={11}>
            <p>
              {props.text}
            </p>
          </Col>
        </Row>
      </AntCard >
    </div>
  );
};