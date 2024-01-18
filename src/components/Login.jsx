import React, {useContext} from 'react';
import {userData} from "../context/UserAuth";
import {useRef} from "react";

const Login=()=> {
    const {userDetails,setUserDetails}= useContext(userData)
    const usernameRef=useRef()
    const passwordRef=useRef()


    const submitHandle=()=>{
       setUserDetails(pre=>({...pre,
           userId:usernameRef.current.value,
           name:usernameRef.current.value,
           password:passwordRef.current.value

       }))
    }
    return (
        <div>
            {userDetails.userId?<p>your are logged in your computer :{userDetails.name}</p>:<>
                <span> User Name : </span>
                <input ref={usernameRef} type="text" placeholder={"user name...."}/> <br/> <br/>
                <span> Password : </span>
                <input ref={passwordRef} type="password" placeholder={"password...."}/> <br/> <br/>
                <button onClick={submitHandle}> submit </button>

            </>}
        </div>
    );
}

export default Login;