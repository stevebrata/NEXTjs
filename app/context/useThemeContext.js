'use client'
import { createContext, useContext, useEffect, useState } from "react";


export const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)


export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    console.log(theme)
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )


}