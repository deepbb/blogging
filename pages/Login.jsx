import { useContext, useRef, useState } from "react"
import { AuthContext  } from "../Context/AuthContext"
import { LoginCall } from "../LoginCall"
import styles from "../styles/Login.module.css"

function Login() {
    const username = useRef()
    const password = useRef()
    const [error,setError] = useState(false)
    const { user ,isFetching, dispatch } = useContext(AuthContext)
    console.log(user);
    console.log(isFetching);

    const handleClick = async (e)=> {
        e.preventDefault()
        setError(false)
        console.log(username.current.value);

        try {
          await  LoginCall  ({username:username.current.value,password:password.current.value},dispatch)


        } catch (err) {
            setError(err)
            setError(true)
        }

        }
        // 
        //   );
        // //   navigate("/")
        // // try {
        // //     const res = await axios.post("/auth/login",{username,password})
        // //     navigate("/")
        // //     console.log(res)
        // // } catch (err) {
        // //     setError(true)
        // // }
        // console.log(isFetching);
    
    return (
        <div className={styles.login}>
            <h1 className={styles.title}>Log In</h1>
                <form className={styles.loginform} onSubmit={handleClick}>
                    <label className={styles.loginlabel}>User Name</label>
                    <input
                     ref={username}
                     type="text" placeholder="enter your name" />
                    <label className={styles.loginlabel}>Password</label>
                    <input
                    
                    ref={password}
                     type="password"/>
                    <button className={styles.logbtn}>Login</button>


                </form>
                <button className={styles.regbtn}>Register</button>

                 {error && <h2 style={{color:"teal", marginTop:"20px"}}>Something went wrong</h2> }
                    
        </div>
    )
}

export default Login

//deep   swathi
// LoginCall(
//        {username, password },
//           dispatch
//onChange={(e)=>setusername(e.target.value)