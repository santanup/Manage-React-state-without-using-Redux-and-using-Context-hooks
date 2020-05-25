// In this example, we will create a user context.
import React, {useContext, createContext, useReducer} from "react";
import PropTypes from 'prop-types';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
    userLoggedIn: false,
    user: true,
    token: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                userLoggedIn: true
            };
        case USER_LOGOUT:
            return {
                ...state,
                userLoggedIn: false
            };
        default:
            throw new Error('Unexpected type');
    }
};

/**
 * Here i have created a context with a parameter array.
 * the first index of the array is the state
 * and the second index of the array is the setState function
 * @type {React.Context<({type: string}|(function(...[*]=)))[]>}
 */
export const UserProviderContext = createContext([initialState, () => {}]);

/**
 * set a name of the context
 * @type {string}
 */
UserProviderContext.displayName = 'User';

/**
 * create a new hook to access the state
 * @returns {({type: string}|(function(...[*]=)))[]}
 */
export const useUser = () => useContext(UserProviderContext);

/**
 * create a component for the state provider and wrap on the parent component
 * @param children {any}
 * @returns {*}
 * @constructor
 */
export const UserProvider = ({children}) => {

    // Here I have created a reducer hook for maintaining the state
    const [state, dispatch] = useReducer(reducer, null, () => initialState);

    return (
        // set the value on the content, when a state will update it dispatch the value into the context
        <UserProviderContext.Provider value={[state, dispatch]}>
            {children ? children : ''}
        </UserProviderContext.Provider>
    )
};

UserProvider.propTypes = {
    children: PropTypes.any.isRequired
};
