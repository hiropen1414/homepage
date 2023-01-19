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
    }
  };

  return (
    <div style={{ maxWidth: 1440, margin: 'auto', marginLeft: -17 }}>
      <Header />
      <div style={styles.titleImgBox}>
        <Image src={MEDIA_TITLE} preview={false} />
      </div>
      <MediaIntro />
      <Footer />
    </div >
  );
};