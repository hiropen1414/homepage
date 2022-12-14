import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { Carousel as AntCarousel } from 'antd';
import { ReactNode } from 'react';

type Props = {
  components: ReactNode;
  styles?: CSSInterpolation;
}

export const Carousel = (props: Props) => {
  return (
    <AntCarousel
      autoplay
      css={css(props.styles)}
      key='img'
    >
      {props.components}
    </AntCarousel>
  );
};