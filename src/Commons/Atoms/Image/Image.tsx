import { Image as AntImage, ImageProps } from 'antd';
import { CSSProperties } from 'react';

type Props = {
  src: string;
  styles?: ImageProps | CSSProperties;
  boxStyles?: CSSProperties;
  preview?: boolean;
  className?: string;
  height?: string;
}

export const Image = (props: Props) => {

  return (
    <div style={props.boxStyles}>
      <AntImage
        height={props.height}
        style={props.styles}
        preview={props.preview}
        src={props.src}
        className={props.className}
      />
    </div>
  );
};
