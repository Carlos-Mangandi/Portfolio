import { createContext, useState, useEffect, ReactNode } from "react";

// Definir el tipo para el contexto del modo oscuro
interface DarkModeContextType {
  isDarkMode: boolean;
  setDarkMode: (isDark: boolean) => void;
}

// Crea un contexto para el modo oscuro
export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Definir las props para el proveedor de contexto del modo oscuro
interface DarkModeProviderProps {
  children: ReactNode;
}

// Crea un proveedor de contexto para el modo oscuro
export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Verifica si el sistema operativo está en modo oscuro
  const isDarkModeSO = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Verifica si hay un valor en el localStorage para el modo oscuro
  const isDarkModeLocalStorage = JSON.parse(window.localStorage.getItem("darkMode") || "null");

  // Respeta el modo oscuro del sistema operativo solo si no hay un valor en el localStorage
  useEffect(() => {
    setDarkMode(isDarkModeLocalStorage === null ? isDarkModeSO : isDarkModeLocalStorage);
  }, [isDarkModeLocalStorage, isDarkModeSO]);

  const setDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
    window.localStorage.setItem("darkMode", JSON.stringify(isDark));
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
