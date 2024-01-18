import React from 'react';
import {createContext} from "react";

export  const userData=createContext({})


const UserAuth=({children})=> {
    return (
        <userData.Provider>{children}</userData.Provider>
    );
}

export default UserAuth;