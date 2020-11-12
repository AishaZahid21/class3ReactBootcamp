import React, { useContext } from "react"
import ThemeContext from "../../context/themeContext"

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    return (
        <button style={ {marginTop:"20px",marginBottom:"20px"} } onClick={() => { setThemeMode(themeMode === "light" ? "dark" : "light") }}>
            Switch Theme
        </button>
    )
}

export default ThemeToggler