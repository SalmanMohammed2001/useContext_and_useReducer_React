import React, {createContext} from 'react';

export  const userActivity=createContext({})

const UserActivity = ({children}) => {
        return (
            <userActivity.Provider>{children}</userActivity.Provider>
        )

    }


;

export default UserActivity;