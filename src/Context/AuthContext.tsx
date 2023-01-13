import { createContext, useState, ReactNode } from "react";

interface ContextTypes {
  loading: boolean;
}

const Context = createContext({} as ContextTypes);

interface PropsContext {
  children: ReactNode;
}

function AuthProvider({ children }: PropsContext) {
  const [loading, setLoading] = useState(true);

  return <Context.Provider value={{ loading }}>{children}</Context.Provider>;
}

export { Context, AuthProvider };
