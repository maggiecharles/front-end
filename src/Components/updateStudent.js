import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 import Button from "react-bootstrap/Button";
 import Form from "react-bootstrap/Form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const UpdateStudent = () => {
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const token = sessionStorage.getItem("accessToken");

    setLoading(true);

    axios
      .get(`http://localhost:4000/getStudentById/` + _id, {
        // headers: {
        //   Authorization: Bearer ${token},
        //   "Content-Type": "application/json",
        // },
      })
      .then((res) => {
        setData({
          _id: res.data._id,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          gender: res.data.gender,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [_id]);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });
  const navigate = useHistory();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //.....................................................
  const saveStudent = (e) => {
    e.preventDefault();
    // const token = sessionStorage.getItem("accessToken");

    setLoading(true);

    axios
      .patch(`http://localhost:4000/patchStudents/` + _id, data, {
        // headers: {
        //   Authorization: Bearer ${token},
        //   "Content-Type": "application/json",
        // },
      })
      // .then(res=>console.log(res))
      .then((res) => {
        // toast.success('Vendor updated successfully',{
        //     position: toast.POSITION.TOP_RIGHT,
        //     autoClose: 3000,
        // })
        alert("Student updated successfully");
        navigate.push("/AllStudents");
      })
      // .catch(err=>console.log(err.message))
      .catch((err) => {
        toast.error("An error occurred while updating the record.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className='class="d-flex justify-content-center mx-auto col-md-12 p-5 rounded shadow addStudent'>
      <Form onSubmit={saveStudent}>
        <h4 className="pb-1 display-12"> Edit Student</h4>

        <Form.Group className="mb-3" required controlId="unit_Id">
          {/* <Form.Label>Vendor Id:</Form.Label> */}
          <Form.Control
            type="hidden"
            required
            onChange={handleChange}
            value={data._id}
            name="_id"
            disabled="disabled"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Firstname:</Form.Label>
          <Form.Control
            type="input"
            required
            onChange={handleChange}
            name="firstname"
            value={data.firstname}
            placeholder="Enter Firstname"
          />
          {/* <p className='text-danger'>{formErrors.firstname}</p> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Lastname:</Form.Label>
          <Form.Control
            type="input"
            required
            onChange={handleChange}
            name="lastname"
            value={data.lastname}
            placeholder="Enter lastname"
          />
          {/* <p className='text-danger'>{formErrors.lastname}</p> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            type="input"
            required
            onChange={handleChange}
            name="gender"
            value={data.gender}
          />
          {/* <p className='text-danger'>{formErrors.phonenumber}</p> */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default UpdateStudent;