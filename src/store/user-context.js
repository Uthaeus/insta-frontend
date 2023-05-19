import { useState, createContext } from "react";

export const UserContext = createContext({
    user: null,
    isAuthorized: false,
    login: () => {},
    logout: () => {}

});

function UserContextProvider(props) {
    const [user, setUser] = useState(null);

    const loginHandler = (user) => {
        setUser(user);
    };

    const logoutHandler = () => {
        setUser(null);
    };

    const contextValue = {
        user: user,
        isAuthorized: !!user,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;