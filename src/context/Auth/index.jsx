import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const signIn = ({ user, password }) => {
    setUser({ id: 1, usu_nome: user });
  };

  const signOut = () => {
    setUser({});
  };

  return (
    <>
      <AuthContext.Provider value={{ user, signIn, signOut }}>
        {/* { user?.id ? "logado" : "não logado"} 
        <button onClick={signIn}>Entrar</button>
        <button onClick={signOut}>Sair</button>  */}
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error("useAuth must by used within AuthProvider");
  return authContext;
}
