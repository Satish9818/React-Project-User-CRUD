import { useEffect, useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
  let userId = useParams();
  let navigate=useNavigate()

  let [name, setName] = useState("");
  let [salary, setSalary] = useState(0);
  let [company, setCompany] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${userId.abc}`)
      .then((resp) => {
        setName(resp.data.empName);
        setSalary(resp.data.empSalary);
        setCompany(resp.data.empCompany);
        console.log("got the Data");
      })
      .catch(() => {
        console.log("Data Not found");
      });
  }, []);

  let getName=(e)=>{
    setName(e.target.value)
  }
  let getSalary=(e)=>{
    setSalary(e.target.value)
  }
  let getCompany=(e)=>{
    setCompany(e.target.value)
  }

  let formHandle=(e)=>{
    e.preventDefault();

    let payload={
      empName:name,
      empSalary:salary,
      empCompany:company
    }

    axios
      .put(`http://localhost:5000/employees/${userId.abc}`,payload)
      .then(() => {
       console.log("data Updated");
      })
      .catch(() => {
        console.log("Data Not found");
      });

      navigate("/user")
  }

 


 
  return (
    <div id={style.myForm}>
      <form>
        <h1 id={style.eu1}>EDIT USER </h1>
        <label>Name:</label>
        <br></br>
        <input type="text" value={name} onChange={getName}/>
        <br></br>

        <label>Salary:</label>
        <br></br>
        <input type="number" value={salary} onChange={getSalary}/>
        <br></br>

        <label>Company:</label>
        <br></br>
        <input type="text" value={company} onChange={getCompany}/>
        <br></br>

        <button onClick={formHandle}>UPDATE</button>
      </form>
    </div>
  );
};

export default Edituser;
