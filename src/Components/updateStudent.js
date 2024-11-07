import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Button, Form } from "react-bootstrap";

const UpdateStudent = () => {

    const {student_id} = useParams();
    const [loading ,setLoading] = useState(false);

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        gender: ""
    })
    const history = useHistory()

    useEffect(()=> {
        // const token = sessionStorage.getItem("accessToken")

        setLoading(true);

        axios.get('http://localhost:4000/getStudent' + student_id);{
    //    headers: {
    //     Authorization: Bearer ${token},
    //     'Content-Type': 'application/json'
    //    } 
        }
    })
    .then((res)=>{
        setData({
            _id:res.data.id,
            firstname: res.data.firstname,
            lastname:res.data.lastname,
            gender: res.data.gender
        })
    })
    .catch(err => console.log(err)).finally(()=>{
        setLoading(false);
    },[student_id])


    const handleChange = (e) => {
        const {name, value} = e.target
        setData((prev)=> {
            return{...prev, [name]:value}
        })
    }

    const saveStudent = (e) => {
        e.preventDefault()
        // const token = sessionStorage.getItem("accessToken")
        setLoading(true);
        axios.patch('http://localhost:4000/patchStudents' + student_id, data, {
        //    headers: {
        //     Authorization: Bearer ${token},
        //     'Content-Type': 'application/json'
        //    } 
        })
        .then((res)=>{
            alert('Student Added Succesfully')
            history.push('/AllStudents')
            toast.success('Student Added Succesfully',{
                position:toast.POSITION.TOP_RIGHT,
                autoClose:3000
            })
        })
        .catch((err)=>{
            alert('Error while adding student')
            toast.error('Error While adding Student', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose:3000
            })
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    return(
        <div className="d-flex justify-content-center mx-auto col-md-12 p-5 rounded shadow AddStudent" >
            <Form onSubmit={saveStudent}>
                <h4 className="pb-1 display-12">Edit Student</h4>
                <Form.Group className="mb-3" required controlId="unit_id">
                    <Form.Control
                    type="hidden"
                    required
                    onChange={handleChange}
                    value={data._id}
                    name="_id"
                    disabled="disabled"
                    />
                </Form.Group>

                <Form.Group className="mb-3"controlId="formBasicEmail">
                    <Form.Label>Firstname:</Form.Label>
                    <Form.Control
                    type="input"
                    required
                    onChange={handleChange}
                    value={data.firstname}
                    name="firstname"
                    placeholder="Enter FirstName"
                    />
                </Form.Group>
                

                
                <Form.Group className="mb-3"controlId="formBasicEmail">
                    <Form.Label>LastName:</Form.Label>
                    <Form.Control
                    type="input"
                    required
                    onChange={handleChange}
                    value={data.lastname}
                    name="lastname"
                    placeholder="Enter lastname"
                    />
                </Form.Group>


                <Form.Group className="mb-3"controlId="formBasicEmail">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control
                    type="input"
                    required
                    onChange={handleChange}
                    value={data.gender}
                    name="gender"
                    placeholder="Enter gender"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>

            <ToastContainer/>
            </Form>
        </div>
    )


}
export default UpdateStudent;