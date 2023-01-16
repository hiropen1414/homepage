import { css } from '@emotion/react';
import { Image } from '../../Commons/Atoms/Image/Image';
import { Footer } from '../../Commons/Organisms/Footer';
import { GameIntro } from '../../Commons/Organisms/GameIntro';
import { Header } from '../../Commons/Organisms/Header';
import GAME_TITLE from '../../Commons/static/svg/game_title.svg';

export const Game = () => {
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
      <div css={css(styles.titleImgBox)}>
        <Image src={GAME_TITLE} preview={false} />
      </div>
      <GameIntro />
      <Footer />
    </div >
  );
};