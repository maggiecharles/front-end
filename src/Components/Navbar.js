import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div className="Nav">
            <div className="Left">
                <h1>Front End</h1>
            </div>
            <div className="Right">
                <div className="One">
                <Link to="/AddStudent" className="one">
                AddStudent
                </Link>
                </div>
                <div className="One">
                <Link to="/" className="one">
                Login
                </Link>
                </div>
                <div className="One">
                <Link to="/Register" className="one">
                Register
                </Link>
                </div>
                <div className="One">
                <Link to="/AllStudents" className="one">
                AllStudents 
                </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;