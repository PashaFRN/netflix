import { useState, useEffect } from "react";
import { ThemeContext } from "./theme-context";

export function ThemeProvider ({children}){

    const [Theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        document.documentElement.classList.toggle('dark', Theme === 'dark')
        localStorage.setItem('theme', Theme)
    },[Theme])

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

    return (
        <ThemeContext.Provider value={{
            Theme,toggleTheme
        }}
        >
        {children}
        </ThemeContext.Provider> 
    )
}
