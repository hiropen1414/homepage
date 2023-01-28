import CarouselImage1 from '../../Commons/static/img/Carousel/seiyuusai2.png';
import CarouselImage2 from '../../Commons/static/img/Carousel/code.png';
import CarouselImage3 from '../../Commons/static/img/Carousel/seiyuusai.png';
import { Image } from '../../Commons/Atoms/Image/Image';

const styles = {
  boxStyles: {
    margin: 0,
    marginBottom: '20px ',
    display: 'flex',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 450,
    width: '100vw',
    backgroundSize: 'contain',
    maxWidth: '100%',
  },
};

export const topCarouselNode = {
  node: [
    <Image
      key='img1'
      src={CarouselImage1}
      styles={styles.imgStyle}
      boxStyles={styles.boxStyles}
      preview={false}
    />,
    <Image
      key='img2'
      src={CarouselImage2}
      styles={styles.imgStyle}
      boxStyles={styles.boxStyles}
      preview={false}
    />,
    <Image
      key='img3'
      src={CarouselImage3}
      styles={styles.imgStyle}
      boxStyles={styles.boxStyles}
      preview={false}
    />
  ]
};