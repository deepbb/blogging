import React from 'react'
import styles from "../styles/Header.module.css"
import Image from "next/image"
import Link from "next/link"



function Header() {
  return (
      <>
    <div className={styles.container}>
    <div className={styles.headerimg}>
       <Image className={styles.imgblock} src="/img/blog.png" alt="" height="150" width="150" /> 
       </div>
        <h1 className={styles.title}>You can write your Technical, Practical and Theoretically Interesting Blogs here!</h1>
        <button className={styles.btn}> <Link href="/Write" className={styles.link}>create your blog here</Link></button>
    </div>
    </>
  )
}

export default Header