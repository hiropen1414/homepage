import { Image } from '../Atoms/Image/Image';
import { CLUB_INFO } from '../constants/text';
import { MakeList } from '../Molecules/makeList';
import { makeNewLine } from '../static/function/makeNewLine';
import logo from '../static/svg/icon_footer.svg';

export const Footer = () => {
  const style = {
    footer: {
      background: 'rgb(38, 38, 38)',
      width: '100vw',
      height: 400,
      maxWidth: '1440px',
    },
    image: {
      width: 360,
      marginLeft: 256,
      marginTop: 16
    },
    infoBox: {
      display: 'flex'
    },
    infoText: {
      color: 'rgb(240,240,240)',
      marginTop: 24,
      marginLeft: 32
    }
  };

  return (
    <div style={style.footer}>
      <MakeList />
      <div style={style.infoBox}>
        <Image src={logo} styles={style.image} preview={false} />
        <p style={style.infoText}>{makeNewLine(CLUB_INFO)}</p>
      </div>
    </div>
  );
};