// In this example, we will create a theme context.
import React, {useContext, useState, createContext} from "react";
import PropTypes from 'prop-types';

const defaultTheme = {type: 'dark'};

/**
 * Here i have created a context with a parameter array.
 * the first index of the array is the state
 * and the second index of the array is the setState function
 * @type {React.Context<({type: string}|(function(...[*]=)))[]>}
 */
export const ThemeProviderContext = createContext([defaultTheme, () => {}]);

/**
 * set a name of the context
 * @type {string}
 */
ThemeProviderContext.displayName = 'Theme';

/**
 * create a new hook to access the state
 * @returns {({type: string}|(function(...[*]=)))[]}
 */
export const useTheme = () => useContext(ThemeProviderContext);

/**
 * create a component for the state provider and wrap on the parent component
 * @param propTheme {Object}
 * @param children {any}
 * @returns {*}
 * @constructor
 */
export const ThemeProvider = ({theme: propTheme, children}) => {

    // Here I have created a state hook for maintaining the state
    const [theme, setTheme] = useState(propTheme);

    return (
        // set the value on the content, when a state will update it dispatch the value into the context
        <ThemeProviderContext.Provider value={[theme, setTheme]}>
            {children ? children : ''}
        </ThemeProviderContext.Provider>
    )
};

ThemeProvider.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.any.isRequired
};

ThemeProvider.defaultProps = {
    theme: defaultTheme
};
