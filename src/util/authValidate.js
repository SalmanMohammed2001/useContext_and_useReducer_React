export const submitHandle=(username,password,setFun)=>{
    setFun((pre)=>({...pre,
        userId:username.current.value,
        name:username.current.value,
        password:password.current.value

    }))
}