import React, {useState} from 'react';
import {createContext} from "react";

export  const userData=createContext({})


const UserAuth=({children})=> {

    const [userDetails,setUserDetails]=useState({
        name:"",
        password:"",
        userId:"",
    })

    return (<userData.Provider value={{userDetails,setUserDetails}}>{children}</userData.Provider>
    );
}

export default UserAuth;