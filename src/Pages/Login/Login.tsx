import { Outlet, useNavigate } from 'react-router';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { CLUB_MEMBER_TOP_PATH, CLUB_MEMBER_TOP_CHILD, LOGIN_PATH, HOME_URL } from '../../Commons/constants/path';
import {
  onAuthStateChanged
} from 'firebase/auth';
import { User } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { every, isEqual } from 'lodash';
import { ALERT_LOGIN, BACK_TO_TOP, CLUB_MEMBER_LOGIN, LOGIN } from '../../Commons/constants/text';
import { Form } from '../../Commons/Atoms/Form/Form';
import { FormItems } from '../../Commons/Organisms/FormItems';
import { FORM_TYPE } from '../../Commons/static/FormInfo/FormInfo';
import { LOGIN_INDEX } from '../../Commons/constants';
import { Button } from '../../Commons/Atoms/Button/Button';
import { Image } from '../../Commons/Atoms/Image/Image';
import circleIcon from '../../Commons/static/svg/circle_icon.svg';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

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
    background:'white',
    boxShadow: '2px 10px 10px 5px rgba(0,0,0,0.3)'
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
  },
  spinBox: {
    width: 400,
    maxWidth: '100%',
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center' as const,
  },
  spin: {
    fontSize: '15em',
  },
  login: {
    background: '#fcf0fc',
    width: '100%',
    maxWidth: '100%',
    paddingTop: 40
  }
};


export const Login = () => {
  const [user, setUser] = useState<User | null>(null);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  const [loginData, setLoginData] = useState(FORM_TYPE[LOGIN_INDEX]);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const loginDataValues = Object.values(loginData);
    await signInWithEmailAndPassword(auth, loginDataValues[0].value, loginDataValues[1].value).then(() => {
      if (!redirectTo || isEqual(redirectTo, CLUB_MEMBER_TOP_CHILD)) {
        //redirect???????????????????????????????????????Club???Top???????????????
        navigate(CLUB_MEMBER_TOP_PATH);
      }
    }).catch(() => {
      alert(ALERT_LOGIN);
    });
  };

  /* ??????????????????????????????????????????????????? */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLogin(true);
      if (currentUser) {
        setUrlLogin();
      }
    });
    //Private???????????????????????????????????????????????????????????????????????????????????????
    if (!redirectTo) {
      const locationLogin = (window.location.href).split('login')[1];
      setRedirectTo(locationLogin);
      history.pushState(null, '', LOGIN_PATH);
    }
  }, []);

  const setUrlLogin = () => {
    history.pushState(null, '', (redirectTo === null) ? CLUB_MEMBER_TOP_PATH : LOGIN_PATH + redirectTo);
    if (isEqual(Object(redirectTo), '')) {
      window.location.replace(CLUB_MEMBER_TOP_PATH);
    }
  };

  //???data??????????????????????????????????????????
  const validationCheckArray = Object.keys(loginData).map((key) => {
    return (!isEqual(loginData[key].value, '') || isEqual(loginData[key].required, false));
  });

  const validationCheck = every(validationCheckArray);

  return (
    (isLogin) ? (
      (user) ? (//???????????????????????????????????????????????????????????????
        <>
          {setUrlLogin()}
          <Outlet />
        </>
      ) : (//???????????????????????????????????????
        <div style={styles.login}>
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
                    label={LOGIN}
                    onClick={(validationCheck) ? handleSubmit : undefined}
                  />
                }
              />
            </Form>
          </div>
        </div>
      )
    ) : (
      <div style={styles.spinBox}>
        <Spin
          indicator={<LoadingOutlined style={styles.spin} spin />}
        />
      </div>
    )
  );
};