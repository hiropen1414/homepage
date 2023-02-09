import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import 'firebase/auth';
import { User } from 'firebase/auth';

const AuthContext = createContext<{ user: User | null }>({
  user: null
});

export function useAuthContext() {
  return useContext(AuthContext);
}

// export const AuthProvider = (children: ReactNode) => {
//   const [user, setUser] = useState<User | null>(null);

//   const value = {
//     user,
//   };

//   useEffect(() => {
//     const unsubscribed = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return () => {
//       unsubscribed();
//     };
//   }, []);

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };