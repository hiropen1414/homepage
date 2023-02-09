import { Navigate, Outlet, redirect, useNavigate } from 'react-router';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { CLUB_MEMBER_TOP_PATH, CLUB_MEMBER_TOP_CHILD, LOGIN_PATH, HOME_URL } from '../../Commons/constants/path';
import {
  onAuthStateChanged
} from 'firebase/auth';
import { User } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { every, isEqual } from 'lodash';
import { ALERT_LOGIN, BACK_TO_TOP, CLUB_MEMBER_LOGIN } from '../../Commons/constants/text';
import { Form } from '../../Commons/Atoms/Form/Form';
import { FormItems } from '../../Commons/Organisms/FormItems';
import { FORM_TYPE } from '../../Commons/static/FormInfo/FormInfo';
import { LOGIN_INDEX } from '../../Commons/constants';
import { Button } from '../../Commons/Atoms/Button/Button';
import { Image } from '../../Commons/Atoms/Image/Image';
import circleIcon from '../../Commons/static/svg/circle_icon.svg';

export const Login = () => {
  const [user, setUser] = useState<User | null>(null);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  const [loginData, setLoginData] = useState(FORM_TYPE[LOGIN_INDEX]);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const loginDataValues = Object.values(loginData);
    await signInWithEmailAndPassword(auth, loginDataValues[0].value, loginDataValues[1].value).then(() => {
      if (!redirectTo || isEqual(redirectTo, CLUB_MEMBER_TOP_CHILD)) {
        //redirect先が指定されていないとき、ClubのTopに飛ばす。
        navigate(CLUB_MEMBER_TOP_PATH);
      }
    }).catch(() => {
      alert(ALERT_LOGIN);
    });
  };

  /* ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    //Privateなパスを直接打った時、ログイン後に遷移するパスを保存する。
    if (!redirectTo) {
      const locationLogin = (window.location.href).split('login')[1];
      setRedirectTo(locationLogin);
      history.pushState(null, '', LOGIN_PATH);
    }
  }, []);

  const setUrlLogin = () => {
    history.pushState(null, '', (isEqual(Object(redirectTo), '')) ? CLUB_MEMBER_TOP_PATH : LOGIN_PATH + redirectTo);
    if (isEqual(Object(redirectTo), '')) {
      window.location.replace(CLUB_MEMBER_TOP_PATH);
    }
  };

  //各dataに対して入力があるかチェック
  const validationCheckArray = Object.keys(loginData).map((key) => {
    return (!isEqual(loginData[key].value, '') || isEqual(loginData[key].required, false));
  });

  const validationCheck = every(validationCheckArray);

  const styles = {
    form: {
      maxWidth: 550,
      width: 400,
      marginTop: 88,
    },
    button: {
      width: 168,
      height: 48,
      marginLeft: 192,
      marginBottom: 40,
      borderRadius: 10
    },
    formBox: {
      width: 550,
      height: 'fit-content',
      border: 'solid 2px black',
      borderRadius: 12,
      margin: 'auto',
      marginTop: 88,
    },
    title: {
      marginTop: 40,
      textAlign: 'center' as const,
      fontSize: '2.5em',
      textDecoration: 'underline',
    },
    image: {
      display: 'block',
      position: 'absolute' as const,
      width: 128,
      border: 'solid 1px blue',
      borderRadius: '50%',
      left: 208,
      top: -88
    }
  };

  return (
    (user) ? (
      <>
        {setUrlLogin()}
        <Outlet />
      </>
    ) : (
      <div style={{ width: '100%', maxWidth: '100%' }}>
        <Button label={BACK_TO_TOP} type='primary' onClick={() => {
          navigate(HOME_URL);
        }} />
        <p style={styles.title}>{CLUB_MEMBER_LOGIN}</p>
        <div style={styles.formBox}>
          <Image src={circleIcon} preview={false} styles={styles.image} />
          <Form
            labelCol={{ span: 13 }}
            style={styles.form}
          >
            <FormItems
              formData={loginData}
              setFormData={setLoginData}
              onSubmit={
                <Button
                  style={styles.button}
                  className='AnchorExpand'
                  type='primary'
                  htmlType='submit'
                  label='Log In'
                  onClick={(validationCheck) ? handleSubmit : undefined}
                />
              }
            />
          </Form>
        </div>
      </div>
    )
  );
};