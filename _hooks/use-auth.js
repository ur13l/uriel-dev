import { createContext, useContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import Router from "next/router";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        Router.push("/admin/login");
      });
  }, [user]);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
