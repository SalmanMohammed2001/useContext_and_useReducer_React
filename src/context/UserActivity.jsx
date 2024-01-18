import React, {createContext, useReducer, useState} from 'react';
import {userActivityReducer} from "../reducers/userActivityReducer.js";

export  const userActivity=createContext({})

const UserActivity = ({children}) => {


    const [state,setState]=useReducer(userActivityReducer,{
        image: '',
        name: '',
        city: '',
        position: ''
    });

        return (
            <userActivity.Provider value={{
                state,setState

            }}>
                {children}</userActivity.Provider>
        )

    }


;

export default UserActivity;