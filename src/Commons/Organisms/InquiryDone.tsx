import { useNavigate } from 'react-router';
import { Button } from '../Atoms/Button/Button';
import { Image } from '../Atoms/Image/Image';
import { HOME_URL } from '../constants/path';
import { BACK_TO_TOP } from '../constants/text';
import successCheck from '../static/svg/success.svg';

export const InquiryDone = () => {
  const styles = {
    image: {
      margin: 'auto',
      textAlign: 'center' as const
    },
    imageBox: {
      width: 'fit-content',
      margin: 'auto'
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

  const navigate = useNavigate();
  return (
    <div>
      <Image boxStyles={styles.imageBox} styles={styles.image} src={successCheck} preview={false} />
      <Button type='primary' style={styles.button} label={BACK_TO_TOP} onClick={() => { navigate(HOME_URL); }} />
    </div>
  );
};