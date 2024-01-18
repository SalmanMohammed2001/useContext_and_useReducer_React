export const submitHandle=(username,password,setFun)=>{
    setFun((pre)=>({...pre,
        userId:username.current.value,
        name:username.current.value,
        password:password.current.value

    }))
}

export  const  submitUserActivity=(image,name,city,position,setFunImage,setFunName,setFunCity,setFunPosition)=>{
    setFunImage(image.current.value)
    setFunName(name.current.value)
    setFunCity(city.current.value)
    setFunPosition(position.current.value)

}