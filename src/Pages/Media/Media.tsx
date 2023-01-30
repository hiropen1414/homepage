import { Footer } from '../../Commons/Organisms/Footer';
import { Header } from '../../Commons/Organisms/Header';
import { Image } from '../../Commons/Atoms/Image/Image';
import MEDIA_TITLE from '../../Commons/static/svg/media_title.svg';
import { MediaIntro } from '../../Commons/Organisms/MediaIntro';

export const Media = () => {
  const styles = {
    title: {
      fontSize: '3em',
      marginTop: 40,
      textAlign: 'center' as const,
    },
    titleImgBox: {
      width: 400,
      margin: 'auto',
      marginTop: 24,
    },
    mediaBox: {
      width: 1400,
      margin: 'auto'
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Header />
      <div style={styles.titleImgBox}>
        <Image src={MEDIA_TITLE} preview={false} />
      </div>
      <div style={styles.mediaBox}>
        <MediaIntro />
      </div>
      <Footer />
    </div >
  );
};