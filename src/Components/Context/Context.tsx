import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext<"dark" | "light">("light");

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(
    window.matchMedia(`(prefers-color-scheme: dark)`).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const theme = isDark ? "dark" : "light";

  return (
    <Context.Provider value={theme}>
      {children}
    </Context.Provider>
  );
};

// eslint-disable-next-line
export const useTheme = () => useContext(Context);