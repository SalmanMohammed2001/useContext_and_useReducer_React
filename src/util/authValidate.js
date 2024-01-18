export const submitHandle=(username,password,setFun)=>{
    setFun(pre=>({...pre,
        userId:usernameRef.current.value,
        name:usernameRef.current.value,
        password:passwordRef.current.value

    }))
}