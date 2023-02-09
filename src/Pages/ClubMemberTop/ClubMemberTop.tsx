import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { LOGIN_PATH } from '../../Commons/constants/path';

export const ClubMemberTop = () => {
  
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isLoaded) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setIsLoaded(true);
      });
      return () => unsubscribe();
    }
  }, [isLoaded]);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate(LOGIN_PATH);
  };

  return (
    <>
      <h1>マイページ</h1>
      <p>{user?.email}</p>
      <button onClick={logout}>ログアウト</button>
    </>
  );
};