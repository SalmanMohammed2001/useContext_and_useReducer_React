

const Action={
    setData:'setData'
}

export  const  userActivityReducer=(state,{type,data})=>{
    switch (type){
        case Action.setData:
            return({
                ...preState,

            })
    }
}