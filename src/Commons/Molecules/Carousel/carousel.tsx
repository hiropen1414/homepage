import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { Carousel as AntCarousel } from 'antd';
import { ReactNode } from 'react';

type Props = {
  autoplay?: boolean;
  fade?: boolean;
  components: ReactNode;
  styles?: CSSInterpolation;
}

export const Carousel = (props: Props) => {
  return (
    <AntCarousel
      fade={props.fade}
      autoplay={props.autoplay}
      css={css(props.styles)}
      key='img'
    >
      {props.components}
    </AntCarousel>
  );
};