import React from "react";
import {useUser, USER_LOGOUT, USER_LOGIN} from "../containers/UserContainer";
import {useTheme} from "../containers/ThemeContainer";

const ContextReducerDemoComponent = () => {

    const [user, dispatch] = useUser();
    const [theme] = useTheme();

    return (
        <div className="App">
            <header className={ theme.type === 'dark' ? 'App-header' : 'App-header-light'}>
                <p>
                    {
                        !user.userLoggedIn ?
                            'Click on the login button to login' :
                            'Click on the logout button to logout'
                    }
                </p>
                {
                    user.userLoggedIn ?
                        <button
                            className="App-link"
                            onClick={() => dispatch({type: USER_LOGOUT})}
                        >
                            {'Logout'}
                        </button> :
                        <button
                            className="App-link"
                            onClick={() => dispatch({type: USER_LOGIN})}
                        >
                            {'Login'}
                        </button>
                }
            </header>
        </div>
    );
};

export default ContextReducerDemoComponent;
