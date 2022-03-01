import React from 'react'
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import {useState} from "react"
import styles from "../../styles/Singlepost.module.css"
import {NEXT_URL} from "../../url"


function Post({postCart}) {
    console.log(postCart);
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [updateMode , setUpdateMode] = useState(false)
  return (
    <div>
      <div className={styles.singlepostdisplay}>
          <div className={styles.singlepost}>
              <div className={styles.singlepostwrapper}>
              {postCart.photo &&
                <Image className={styles.singlepostimg}
                 src={postCart.photo}
                alt="" width="700" height="300" /> 
                }
                {updateMode ? (
                    <input type="text"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)} />
                ) : (

                
                <h1 className={styles.singleposttitle}>{postCart.title}
                <div className={styles.singleposticon}>
                <i className={styles.iconEdit} onClick={()=> setUpdateMode(true)}></i>
                <i className={styles.iconDelete}></i>
                </div>
                </h1>
                )}
                    <div className={styles.singlepostinfo}>
                    
                        <span className={styles.author}>Author :</span> 
                        <span className={styles.time}>Created at :{new Date(postCart.createdAt).toDateString()}</span>
                    </div>
                    {updateMode ? (
                        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} />
                    ) : (
                        <p className={styles.desc}>{postCart.desc}</p> 
                    )}
                    {updateMode && (
                        <button>Update Post</button>
                    )}
                    
            </div>
            <hr/>
            </div>
            <div className={styles.Singlepostsidebar}>
            {/* <Sidebar /> */}
            </div>
           
            
        </div>
    </div>
  )
}

export async function  getServerSideProps ({params}) {
    //const id = params.id
    const res = await axios.get(NEXT_URL + `/api/post/${params.id}`)
    console.log(res.data);
    return {
      props: {
        postCart:res.data
      },
    }
  }

export default Post