
import { Carousel } from '../Commons/Molecules/Carousel/carousel';
import { Header } from '../Commons/Organisms/Header';
import CarouselImage1 from '../Commons/static/img/Carousel/seiyuusai2.png';
import CarouselImage2 from '../Commons/static/img/Carousel/VSCode.PNG';
import CarouselImage3 from '../Commons/static/img/Carousel/seiyuusai.png';
import { Image } from '../Commons/Atoms/Image/Image';
import { Introduction } from '../Commons/Organisms/Introduction';
import { Footer } from '../Commons/Organisms/Footer';


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
    maxWidth: '1440px',

  },
  carousel: {
    background: '#f5f5f5',
    width: '100vw',
    maxWidth: '1440px',
  },
  font: {
    fontSize: '3.5em',
    margin: '1.5em',
  },
  text: {
    fontSize: '1.25em',
    marginLeft: '4em',
    marginTop: '-2em',
    paddingBottom: '1.5em',
  }
};

const carouselNode = {
  node: [
    <Image key='img1' src={CarouselImage1} styles={styles.imgStyle} boxStyles={styles.boxStyles} preview={false}></Image>,
    <Image key='img2' src={CarouselImage2} styles={styles.imgStyle} boxStyles={styles.boxStyles} preview={false}></Image>,
    <Image key='img3' src={CarouselImage3} styles={styles.imgStyle} boxStyles={styles.boxStyles} preview={false}></Image>,
  ]
};

const Top = () => {
  return (
    <div style={{ maxWidth:1440, margin: 'auto' }}>
      <Header />
      <Carousel
        components={carouselNode.node}
        styles={styles.carousel}
      />
      <Introduction headline={{
        style: styles.text
      }} />
      <Footer />
    </div>
  );
};

export default Top;