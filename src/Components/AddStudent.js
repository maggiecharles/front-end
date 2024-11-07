import axios from "axios"
import { useState } from "react"
import {ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddStudent  = () => {
    const [data, setData] =  useState({
        firstname: "",
        lastname: "",
        gender: ""
    })


const handleChange = (e) => {
    const {name, value} = e.target
    setData((prev)=>{
        return{...prev, [name]:value}
    })
}

const handleSubmit = (e) => {
    e.preventDefault()

    // const token = sessionStorage.getItem("access_token")

    axios.post('http://localhost:4000/addStudent', data,{
    //    headers: {
    //     Authorization: `Bearer ${token}`,
    //     'Content-Type': 'application/json'
    //    } 
    })
    .then((res)=>{
        toast.success('Student Added Succefuly', {
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000
        })
    })
    .catch((err)=>{
        toast.error('There was an error when adding the Student', {
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000
        })
    })
}
return(
    <div className="StudentForm">
        <form onSubmit={handleSubmit}>
        <label for="firstname">Firstname</label>
        <br/>
        <input type="text" name="firstname" placeholder="Enter you firstname" onChange={handleChange}/>
        <br/>
        <label for="lastname">Lastname</label>
        <br/>
        <input type="text" name="lastname" placeholder="Enter you lastname"  onChange={handleChange}/>
        <br/>
        <label for="gender">Gender:</label>
        <br/>
        <select name="gender" id="gender"  onChange={handleChange}>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <br/>
        <button type="submit">Submit</button>
        <ToastContainer/>
        </form>
        {/* <p>{data.firstname}</p>
        <p>{data.lastname}</p>
        <p>{data.gender}</p> */}
    </div>
)

}
export default AddStudent;