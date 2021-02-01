import {createContext, useCallback, useMemo, useState} from 'react';

export const AuthContext = createContext()

const MY_AUTH_APP = 'MY_AUTH_APP';

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuntheticated] = useState(window.localStorage.getItem(MY_AUTH_APP));

  const login = useCallback((user) => {
    console.log(user)
    if (user) {
      window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(user))
      setIsAuntheticated(true)
      console.log(user)
     } 
    else {
   alert(false);
    }
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH_APP, true)
    setIsAuntheticated(false)
  }, [])

  const value = useMemo(() => ({
    login,
    logout,
    isAuthenticated
  }), [isAuthenticated, login])


  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;

