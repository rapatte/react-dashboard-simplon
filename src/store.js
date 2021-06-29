import { createContext, useState } from 'react';

export const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
    const tokenStorage = localStorage.getItem("token");
    const [isAuth, setIsAuth] = useState((tokenStorage) ? true : false);
    const [token, setToken] = useState((tokenStorage) ? tokenStorage : null);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                token,
                setToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
