import axios from "axios";
import { useState } from "react";
import styles from "../styles/Register.module.css"
import {NEXT_URL} from "../url"

function Register() {
    const [username,setusername] = useState("")
    const[email,setEmail] =useState("")
    const[password,setpassword] = useState("")
    const[passwordAgain,setpasswordAgain] = useState("")
    const [error,setError] = useState(false)


    const handleClick = async (e)=> {
        e.preventDefault()
        setError(false)
        if (passwordAgain !== password) {
            alert("passwords doesn't match!")
        } else {
            try {
                const res = await axios.post(NEXT_URL + "/api/auth/register",{username,email,password})
                 console.log(res);
            } catch (err) {
                setError(true)
            }
        }
        
        
        
    }
    return (
        <>
        <div className={styles.register}>
            <h1 className={styles.regtitle}>Register</h1>
                <form className={styles.regloginform} onSubmit={handleClick}>
                    <label className={styles.regloginlabel}>Username</label>
                    <input 
                    value={username} 
                    onChange={(e)=>setusername(e.target.value)} 
                    type={styles.regtext} placeholder="enter your name" required />
                    <label className="reg-login-label">Email</label>
                    <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                     type={styles.regtext}
                      placeholder="enter your name" required />
                    <label className="reg-login-label">Password</label>
                    <input
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                     type="password"/>
                     <label className={styles.regloginlabel}>confirm Password</label>
                    <input
                    value={passwordAgain}
                    onChange={(e)=>setpasswordAgain(e.target.value)}
                     type="password"/>
                    <button  className={styles.regbtn}>Register</button>
                    


                </form> 
                {/* <button className="reg-log-btn">Log In</button> */}
                {error && <h2 style={{color:"teal", marginTop:"20px"}}>Something went wrong</h2> }
        </div>

        </>
    )
}

export default Register
