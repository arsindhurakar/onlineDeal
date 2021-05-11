import React, { createContext, useContext } from "react";

import { auth } from "../utils/firebase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // const [currentUser, setCurrentUser] = useState("");
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //     setLoading(false);
  //   });
  //   return unsubscribe;
  // }, []);

  const register = (name, email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const reset = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const signout = () => {
    return auth.signOut();
  };

  const value = {
    // currentUser,
    register,
    signin,
    reset,
    signout,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>
        {/* {!loading && children}
         */}
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
