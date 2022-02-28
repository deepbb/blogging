import React from 'react'
import Post from "./Post"
import Image from "next/image"
import styles from "../styles/PostList.module.css"

function PostLists({product}) {
    console.log(product);
  return (
      <div className={styles.postlist}>
      <div className={styles.postcontainer}>
    {product.map((post)=> (
        <Post key={post._id} post={post} />
    ))}
    </div>
    </div>
  )
}

export default PostLists