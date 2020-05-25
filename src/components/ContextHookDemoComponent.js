import React from "react";
import {useTheme} from "../containers/ThemeContainer";

const ContextHookDemoComponent = () => {

    const [theme, setTheme] = useTheme();

    return (
        <div className="App">
            <header className={ theme.type === 'dark' ? 'App-header' : 'App-header-light'}>
                <p>{'Click on the change button to change theme'}</p>
                <button
                    className="App-link"
                    onClick={() => setTheme({
                        type: theme.type === 'dark' ? 'light' : 'dark'
                    })}
                >
                    {'Change'}
                </button>
            </header>
        </div>
    );
};

export default ContextHookDemoComponent;
