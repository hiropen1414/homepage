import { useNavigate } from 'react-router';
import { Button } from '../Atoms/Button/Button';
import { Image } from '../Atoms/Image/Image';
import { LOGIN_PATH } from '../constants/path';
import { CLUB_INFO } from '../constants/text';
import { MakeList } from '../Molecules/makeList';
import { makeNewLine } from '../static/function/makeNewLine';
import logo from '../static/svg/icon_footer.svg';

export const Footer = () => {
  const style = {
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
    },
    footerBox: {
      width: 1400,
      maxWidth: '100%',
      height: 400,
      margin: 'auto'
    },
    footer: {
      position: 'relative' as const,
      bottom: 0,
      width: '100%',
      background: 'rgb(37, 37, 37)',
    },
    loginAnchor: {
      backGround: 'white',
      position: 'relative' as const,
      top: 28,
      right: -64,
    }
  };

  const navigate = useNavigate();

  return (
    <div style={style.footer}>
      <div style={style.footerBox}>
        <MakeList />
        <div style={style.infoBox}>
          <Image src={logo} styles={style.image} preview={false} />
          <p style={style.infoText}>{makeNewLine(CLUB_INFO)}</p>
          <Button label='部員の方はこちら' style={style.loginAnchor} type='primary' onClick={() => {
            navigate(LOGIN_PATH);
          }} />
        </div>
      </div>
    </div>
  );
};