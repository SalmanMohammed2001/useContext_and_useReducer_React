import React, {createContext, useReducer, useState} from 'react';

export  const userActivity=createContext({})

const UserActivity = ({children}) => {


    const [state,setState]=useReducer()

        return (
            <userActivity.Provider value={{


            }}>
                {children}</userActivity.Provider>
        )

    }


;

export default UserActivity;