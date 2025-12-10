import { createContext, useContext, useEffect, useState } from "react";

type PortfolioJson = {
  id: number;
  projectname: string;
  languages: string[];
  status: string;
  year: number;
  link: string;
  about: string;
};

interface ContextType {
  theme: "dark" | "light";
  portfolioData: PortfolioJson[];
  isPortfolioReady: boolean;
}

const Context = createContext<ContextType>({
  theme: "light",
  portfolioData: [],
  isPortfolioReady: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(
    window.matchMedia(`(prefers-color-scheme: dark)`).matches
  );
  const [portfolioData, setPortfolioData] = useState<PortfolioJson[]>([]);
  const [isPortfolioReady, setIsPortfolioReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/JSON/Portfolio.json");
        const response = await data.json();
        setPortfolioData(response.Project_Details);
        setIsPortfolioReady(true);
      } catch (error) {
        console.log(error);
        setIsPortfolioReady(true); // Ensure app doesn't hang on error
      }
    };
    fetchData();
  }, []);

  const theme = isDark ? "dark" : "light";

  return (
    <Context.Provider value={{ theme, portfolioData, isPortfolioReady }}>
      {children}
    </Context.Provider>
  );
};

// eslint-disable-next-line
export const useTheme = () => useContext(Context).theme;
export const usePortfolioData = () => {
  const { portfolioData, isPortfolioReady } = useContext(Context);
  return { portfolioData, isPortfolioReady };
};
