import React, { useContext } from "react"
import ThemeContext from "../../context/themeContext"
import ThemeToggler from "./themeToggler"
import './theme.css'
const Header = () => {
    const theme = useContext(ThemeContext)[0]
    return (
        <header className={theme}>
            <h2>Good {theme === 'light' ? "Morning ☀️" : "Night 🌙"}</h2>
            <ThemeToggler/>
        </header>
    )
}

export default Header