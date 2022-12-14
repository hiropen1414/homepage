import { Image as AntImage, ImageProps } from 'antd';
import { CSSProperties } from 'react';

type Props = {
  src: string;
  styles?: ImageProps;
  boxStyles?: CSSProperties;
  preview?:boolean;
}

export const Image = (props: Props) => {

  return (
    <div style={props.boxStyles}>
      <AntImage
        style={props.styles}
        preview={props.preview}
        src={props.src}
      />
    </div>
  );
};
