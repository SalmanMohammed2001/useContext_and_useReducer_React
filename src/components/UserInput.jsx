import React, {useContext} from 'react';
import {userActivity} from "../context/UserActivity.jsx";

const UserInput=()=> {

    const { image, name, city, position, setImage, setName, setCity, setPosition}=useContext(userActivity)


    return (
        <div>UserInput</div>
    );
}

export default UserInput;