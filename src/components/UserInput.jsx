import React, {useContext, useRef} from 'react';
import {userActivity} from "../context/UserActivity.jsx";
import {userData} from "../context/UserAuth.jsx";

const UserInput=()=> {

    const { image, name, city, position, setImage, setName, setCity, setPosition}=useContext(userActivity)

    const {userDetails}=useContext(userData)

        const imageReg=useRef()
        const nameReg=useRef()
        const cityReg=useRef()
        const positionReg=useRef()


    return (
        <div>UserInput</div>
    );
}

export default UserInput;