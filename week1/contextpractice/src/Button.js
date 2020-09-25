import React from 'react'
import ThemeContext from './themeContext'

function Button (props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button className={`${theme}-theme`}>Toggle</button>
            )}
        </ThemeContext.Consumer>
    )
}

export default Button