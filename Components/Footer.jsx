import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'


function Footer() {
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <div>Footer</div>
  )
}

export default Footer