const loginReducer = (state = {}, action)=>{
    switch(action)
    {
        case "LOGIN_STATE":
        return action.loginState;
        default : return state;
    }
}

export default loginReducer;