export const submitHandle=(username,password,setFun)=>{
    setFun(pre=>({...pre,
        userId:username,
        name:password,
        password:username

    }))
}