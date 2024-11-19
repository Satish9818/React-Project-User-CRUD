import { useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState(0);
  let [company, setCompany] = useState("");

  let navigate=useNavigate()

  let getName = (e) => {
    setName(e.target.value);
  };
  let getSalary = (e) => {
    setSalary(e.target.value);
  };
  let getCompany = (e) => {
    setCompany(e.target.value);
  };

  let formHandle = (e) => {
    e.preventDefault();
   let payload={
    empName:name,
    empSalary:salary,
    empCompany:company
   }
    axios.post("http://localhost:5000/employees",payload).then(()=>{
      console.log("Data Stored");
    }).catch(()=>{console.log("Unable to Store Data");})
  
  navigate("/user")
  };

  return (
    <div id={style.myForm}>
      <form>
        <h1 id={style.cu1}>CREATE USER</h1>
        <label>Name:</label>
        <br></br>
        <input type="text" value={name} onChange={getName} />
        <br></br>

        <label>Salary:</label>
        <br></br>
        <input type="number" value={salary} onChange={getSalary} />
        <br></br>

        <label>Company:</label>
        <br></br>
        <input type="text" value={company} onChange={getCompany} />
        <br></br>

        <button onClick={formHandle}>Submit</button>
      </form>
    </div>
  );
};
export default CreateUser;
