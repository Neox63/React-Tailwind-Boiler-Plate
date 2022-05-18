import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({ user: {}, isLogged: true });

export const UserProvider = ({ children }: { children: React.ReactNode}) => {
  const [user, setUser] = useState({ id: 1 });
  const [isLogged, setIsLogged] = useState(true);

  /* useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      const foundUser = JSON.parse(loggedUser);
      setUser(foundUser);
      setIsLogged(true);
    }
  }, []); */

  useEffect(() => {
    setIsLogged(true);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);