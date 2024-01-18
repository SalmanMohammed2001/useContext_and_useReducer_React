import React, {useContext, useRef} from 'react';
import {userActivity} from "../context/UserActivity.jsx";
import {userData} from "../context/UserAuth.jsx";

import {Action} from "../reducers/userActivityReducer.js";

const UserInput = () => {

    const { state,setState} = useContext(userActivity)

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
                <button onClick={()=> setState({
                    type:Action.setData,
                    data:{
                        image:imageReg.current.value,
                        name:nameReg.current.value,
                        city:cityReg.current.value,
                        position:positionReg.current.value
                    }

                })}> submit
                </button>
                <br/>
                <br/>
                <p> {state.image}</p>
                <p>   {state.name}</p>
                <p>  {state.city}</p>
                <p>  {state.position}</p>

            </div> : ''}
        </div>
    );
}

export default UserInput;