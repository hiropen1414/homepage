
import { Carousel } from '../../Commons/Molecules/Carousel/carousel';
import { Header } from '../../Commons/Organisms/Header';
import { Introduction } from '../../Commons/Organisms/Introduction';
import { Footer } from '../../Commons/Organisms/Footer';
import { topCarouselNode } from './TopCarouselNode';

const styles = {
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
    textDecoration: 'underline',
    textUnderlineOffset: 8,
  }
};

const Top = () => {
  return (
    <div style={{ maxWidth: 1440, margin: 'auto', marginLeft: -17 }}>
      <Header />
      <Carousel
        autoplay={true}
        components={topCarouselNode.node}
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