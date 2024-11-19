
import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
const User=()=>{

    let[users,setUsers]=useState([])
    let[reload,setReload]=useState(false)

    useEffect(()=>{
            axios.get("http://localhost:5000/employees")
            .then((resp)=>{setUsers(resp.data);})
            .catch(()=>{console.log("Error");})
            setReload(false)
    },[reload])

    let deleteUser=(id)=>{
        axios.delete(`http://localhost:5000/employees/${id}`)
        setReload(true)
        // window.location.reload("/user")
    }

    return(
        <div id={style.fetchData}>
           {users.map((user)=>{
            return(
                <div id={style.profilePage}>
                    <h1>USERS DATA</h1>
                    <h2 className={style.name}>Name:{user.empName}</h2>
                    <h2 className={style.salary}>Salary:{user.empSalary}</h2>
                    <h2 className={style.company}>Company:{user.empCompany}</h2>
                    <button className={style.edit} ><Link to={`/edit/${user.id}`}>EDIT</Link></button>
                    <button className={style.delete} onClick={()=>{deleteUser(user.id)}}>DELETE</button>
                </div>
            )
           })}
        </div>
    )
}
export default User