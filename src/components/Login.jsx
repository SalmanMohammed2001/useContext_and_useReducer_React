import React from 'react';

const Login=()=> {
    return (
        <div>
          <span> User Name : </span>
            <input type="text" placeholder={"user name...."}/> <br/> <br/>
            <span> Password : </span>
            <input type="password" placeholder={"password...."}/>
        </div>
    );
}

export default Login;