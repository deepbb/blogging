import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from "./Context/AuthActions";
import {NEXT_URL} from "./url"


export const LoginCall = async (usercredentials, dispatch) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post(NEXT_URL + "/api/auth/login",usercredentials);
    console.log(res);
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailure(err))
  }
};



















// //   dispatch({ type: "LOGIN_START" });
// //   try {
// //     const res = await axios.post("/auth/login", userCredential);
// //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
// //   } catch (err) {
// //     dispatch({ type: "LOGIN_FAILURE", payload: err });
// //   }
// // };
  























// //   dispatch(LoginStart());
// //   try {
// //     const res = await axios.post("/auth/login",userCredential);
// //     console.log(res);
// //     dispatch(LoginSuccess(res.data));
// //   } catch (err) {
// //     dispatch(LoginFailure(err))
// //   }
// // };