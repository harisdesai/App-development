import React, {createContext, useState} from 'react';

const Context = createContext<any>(null);

const ContextProvider = ({children}: any) => {

  const [user, setUser] = useState('');

  const login = (email: string) => {
    setUser(email);
  };

  const logout = () => {
    setUser('');
  };

  return (
    <Context.Provider
      value={{
        user,
        login,
        logout,
      }}>

      {children}

    </Context.Provider>
  );
};

export {Context, ContextProvider};