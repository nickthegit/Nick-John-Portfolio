import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    isLoggedIn: false,
    isLoginPending: false,
    loginError: null,
  };
  const [state, setState] = useState(initialState);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// export function useAppContext() {
//   return useContext(AppContext);
// }

export function useAppContext() {
  const state = useContext(AppContext);

  if (state === undefined) {
    throw new Error("useMissionsState must be used within a MissionsProvider");
  }

  return state;
}
