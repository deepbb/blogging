export const LoginStart = (usercredentials)=> ({
    type:"LOGIN_START",
})

export const LoginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload:user,

})

export const LoginFailure = (error)=> ({
    type:"LOGIN_FAILURE",
    payload:error,
})

export const LoginOut = ()=> ({
    type:"LOGOUT",
})

export const UpdateStart = (usercredentials)=> ({
    type:"UPDATE_START",
})

export const UpdateSuccess = (user) => ({
    type:"UPDATE_SUCCESS",
    payload:user,

})

export const UpdateFailure = (error)=> ({
    type:"UPDATE_FAILURE",
    payload:error,
})
