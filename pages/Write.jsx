import axios from "axios"
import Image from "next/image"
import styles from "../styles/Write.module.css"
import Link from "next/link"
import { useState } from "react"

function Write() {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [file,setfile] = useState(null)

    const clickhandler = async (e)=> {
        e.preventDefault()
        const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
       
            try {
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dzthzqctp/image/upload",data)
                console.log(uploadRes.data);
                const { url } = uploadRes.data
                const newPost = {
                    title,
                    desc,
                    photo: url,
                  };

                const res = await axios.post ("http://localhost:3000/api//post/" , newPost)
                console.log(res);
                window.location.replace("/")
     } catch (err) {
         console.log(err);
     }
    }
        
    return (
        <div className={styles.write}>
        {file && (
            <Image src={URL.createObjectURL(file)} className={styles.writeimg} alt="" height="300" width="300" />
        )} 
            {/* <img className="write-img" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
             alt="" /> */}
            <form className={styles.writeform} onSubmit={clickhandler}>
                <div className={styles.writeformgroup}>
                    <label className={styles.writelabel} htmlFor="write-input">
                    write your article
                    </label>
                    <input
                     className={styles.writeinput} id="write-input" 
                     type="file" 
                     onChange={(e)=>setfile(e.target.files[0])}
                      autoFocus={true} />
                    <input
                     className={styles.writetextinput}
                      type="text"
                      value={title}
                      onChange={(e)=>setTitle(e.target.value)}
                      placeholder="Description about the topic"
                       autoFocus={true} />
                </div>
                <div className={styles.writetext}>
                    <textarea 
                    className={styles.writestory} type="text"
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                     placeholder="Tell your story" autoFocus={true} />
                </div>
                    <button className={styles.writebtn} type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
