import React, { useContext } from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Topbar.module.css"
import { AuthContext } from '../Context/AuthContext'
import { useRouter } from 'next/router'

function Topbar() {
  const {user ,dispatch} = useContext(AuthContext)
  const router = useRouter()
  console.log(user);

  const handleOut = (e)=> {
    e.preventDefault()
    dispatch({type:"LOGOUT"})
    router.push("/Login")

  }

  return (
    <div className={styles.topbarmain}>
         <div className={styles.topleft}>
         {user ?
         <li className={styles.listname}>Hello {user.username}</li> : 
         <li className={styles.listname}>Hello</li>
         }
            </div>
            <div className={styles.topmid}>
                <ul className={styles.toplist}>
                    <li className={styles.listitems}><Link href="/" className={styles.link}>HOME</Link></li>
                    <li className={styles.listitems}> <Link href="/Write" className={styles.link}>WRITE</Link>
                    </li>
                    <li className={styles.listitems} onClick={handleOut}>LOGOUT</li>
                </ul>
            </div>
            <div className={styles.topright}>
                <Link href="/Settings" className={styles.link}> PROFILE
                 </Link>
                <ul className={styles.toplist}>
                <li className={styles.listitems}> <Link href="/Login" className={styles.link}>LOGIN</Link></li>
                <li className={styles.listitems}> <Link href="/Register" className={styles.link}>REGISTER</Link></li>
                </ul>

            <i className={styles.fasearch}></i>
                
                 
            </div>
    </div>
  )
}

export default Topbar