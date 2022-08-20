import { createContext, useContext, useState, useEffect } from "react";
const ThemeStateContext = createContext();

export const ThemeStateProvider = ({ children }) => {
  const initialState = {
    mode: "dark",
  };
  const [theme, setTheme] = useState(initialState);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme.mode === "dark") {
      root.classList.remove("light");
      root.classList.add(theme.mode);
    } else {
      root.classList.remove("dark");
      root.classList.add(theme.mode);
    }

    root.classList.add();
  }, [theme.mode]);

  return (
    <ThemeStateContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeStateContext.Provider>
  );
};

// export function useAppContext() {
//   return useContext(AppContext);
// }

export function useThemeStateContext() {
  const state = useContext(ThemeStateContext);

  if (state === undefined) {
    throw new Error("useAppContext must be used within a AppContext");
  }

  return state;
}
