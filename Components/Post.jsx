import React, { useContext } from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/post.module.css"
import { AuthContext } from '../Context/AuthContext'



function Post({post}) {
    const {user} = useContext(AuthContext)
    console.log(user);
    console.log(post);
  return (
      <>
    <div className={styles.post}>
    <Link href={`/post/${post._id}`} className={styles.link} passHref>
                <span className={styles.posttitle}>{post.title}</span>
                </Link>
                <div className={styles.imgblock}>
            <p className={styles.postdesc}>{post.desc}</p>

        <Image className={styles.postimg} src={post.photo} alt="" width="250" height="250" />
   </div>
            <div className={styles.postinfo}>
                <div className={styles.postcats}>
                {post.categories.map((c,index)=>(
                    <span className={styles.postcat} key={index}>{post.categories}</span>
                ))}
                </div>
                </div>
                <div>
                
                <span className={styles.postdate}>{new Date(post.createdAt).toDateString()}</span>
            </div>
    </div>
    </>
  )
}

export default Post
