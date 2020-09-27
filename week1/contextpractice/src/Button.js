import React from 'react'
import ThemeContext from './themeContext'

function Button (props) {
    return (
        <ThemeContext.Consumer>
            {({theme, changeTheme}) => (
                <button className={`${theme}-theme`} onClick={changeTheme}>Toggle</button>
            )}
        </ThemeContext.Consumer>
    )
}

export default Button