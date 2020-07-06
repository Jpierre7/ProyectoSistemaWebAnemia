import { createContext } from "react";

const AuthContext = createContext({
  autenticado: false,
  login: () => {},
  logout: () => {}
});

export default AuthContext;