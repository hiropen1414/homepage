import { Header } from '../Commons/Organisms/Header';
import { Image } from '../Commons/Atoms/Image/Image';
import errorIcon from '../Commons/static/svg/icon_error.svg';
import { Button } from '../Commons/Atoms/Button/Button';
import { HOME_URL } from '../Commons/constants/path';
import { ERROR } from '../Commons/constants/text';

type navigateState = {
  state?: {
    errorCode?: string,
    errorMessage?: string,
  }
}

export const Error = (state: navigateState) => {
  const style = {
    box: {
      width: '100%',
      margin: 'auto',
      marginTop: 32,
    },
    img: {
      width: '100%'
    },
    imgBox: {
      margin: 'auto',
      width: 560
    },
    errorText: {
      fontSize: '1.5em',
      textAlign: 'center' as const
    },
    button: {
      width: 328,
      height: 40,
      margin: 'auto',
      display: 'block',
      marginTop: 48,
      borderRadius: 10,
    }
  };

  const navigateTop = () => {
    window.location.href = HOME_URL;
  };

  history.replaceState(null, '', ERROR);
  return (
    <>
      <Header delete={true} />
      <div style={style.box}>
        <p style={style.errorText}>
          {state.state?.errorMessage ?? 'error'}
        </p>
        <div style={style.imgBox}>
          <Image src={errorIcon} preview={false} styles={style.img} />
        </div>
        <Button type='primary' label='topへ戻る' style={style.button} onClick={navigateTop} />
      </div>
    </>
  );
};