import React from 'react'
import Image from "next/image"

import styles from "../styles/Sidebar.module.css"

function Sidebar() {
  return (
    <div className={styles.sidebar}>
    <div className={styles.sidecontainer}>
       <Image  src="/img/js.PNG" alt="" width="350" height="300" /> 
    </div>
    </div>
  )
}

export default Sidebar