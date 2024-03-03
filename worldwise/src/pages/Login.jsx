import { useState } from "react";
import PageNav from "../component/PageNav";
import styles from "./Login.module.css"
import { Link } from "react-router-dom";
export default function Login() {
  // const [user,setUser] = useState([])
  const [email,setEmail] = useState("john@example.com");
  const [password,setPassword] =useState("1234")


 
  // function handleClick(e){
  //   e.preventDefault()
  //   const newUser ={email:email, password:password}
  //   setUser([...user,newUser])
      

  // }
  
 

  return (
    <div className={styles.login}>
      <PageNav/>
      <main>
        <form >
          <div>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button type="submit" ><Link to="/app">Login</Link></button>

         
        </form>
      </main>
    </div>
  )
}
