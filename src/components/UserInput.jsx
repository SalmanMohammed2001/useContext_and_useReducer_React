import React, {useContext, useRef} from 'react';
import {userActivity} from "../context/UserActivity.jsx";
import {userData} from "../context/UserAuth.jsx";
import {submitUserActivity} from "../util/authValidate.js";

const UserInput = () => {

    const {image, name, city, position, setImage, setName, setCity, setPosition} = useContext(userActivity)

    const {userDetails} = useContext(userData)

    const imageReg = useRef()
    const nameReg = useRef()
    const cityReg = useRef()
    const positionReg = useRef()


    return (
        <div>
            <br/>
            <br/>

            {userDetails.userId ? <div>
                <span>Image: </span>
                <input ref={imageReg} type="text" placeholder={"image"}/> <br/><br/>

                <span>name: </span>
                <input ref={nameReg} type="text" placeholder={"name"}/> <br/><br/>

                <span>city: </span>
                <input ref={cityReg} type="text" placeholder={"city"}/> <br/><br/>

                <span>position: </span>
                <input ref={positionReg} type="text" placeholder={"position"}/> <br/><br/>

                <br/>
                <button onClick={() => submitUserActivity(
                    imageReg,
                    nameReg,
                    cityReg,
                    positionReg,
                    setImage,
                    setName,
                    setCity,
                    setPosition
                )}> submit
                </button>
                <br/>
                <br/>
                <p> {image}</p>
                <p>   {name}</p>
                <p>  {city}</p>
                <p>  {position}</p>

            </div> : ''}
        </div>
    );
}

export default UserInput;