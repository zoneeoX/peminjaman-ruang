import { createContext, useContext, ReactNode } from "react";
import { useGetUser } from "../lib/react-query/queries/queries";

export const AuthContext = createContext<any>(null);

export const useAuth = () => {
  const { data, isPending } = useGetUser();

  return {
    id: data?.id ?? 0,
    email: data?.email ?? "",
    role: data?.role ?? "",
    isAuthenticated: !!data?.id,
    isPending,
  };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error bruh");
  }
  return context;
};
