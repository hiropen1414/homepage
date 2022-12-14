import { css, CSSObject } from '@emotion/react';
import { Image as AntImage, ImageProps } from 'antd';

type Props = {
  src: string;
  styles?: ImageProps;
  boxStyles?: CSSObject;
  preview?:boolean;
}

export const Image = (props: Props) => {

  return (
    <div css={css(props.boxStyles)}>
      <AntImage
        style={props.styles}
        preview={props.preview}
        src={props.src}
      />
    </div>
  );
}
