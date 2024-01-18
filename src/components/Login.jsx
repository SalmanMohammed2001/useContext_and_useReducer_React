import React, {useContext} from 'react';
import {userData} from "../context/UserAuth";
import {useRef} from "react";
import {submitHandle} from '../util/authValidate'

const Login=()=> {
    const {userDetails,setUserDetails}= useContext(userData)
    const usernameRef=useRef()
    const passwordRef=useRef()


    return (
        <div>
            {userDetails.userId?<p>your are logged in your computer :{userDetails.name}</p>:<>
                <span> User Name : </span>
                <input ref={usernameRef} type="text" placeholder={"user name...."}/> <br/> <br/>
                <span> Password : </span>
                <input ref={passwordRef} type="password" placeholder={"password...."}/> <br/> <br/>
                <button onClick={()=>{
                    return submitHandle(usernameRef,passwordRef,setUserDetails)
                }}> submit </button>

            </>}
        </div>
    );
}

export default Login;