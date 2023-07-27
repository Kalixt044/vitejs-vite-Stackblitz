import { createContext } from "react"

const ThemeContext = createContext({
  theme: '',
  setTheme: () => {}
})

export { ThemeContext }