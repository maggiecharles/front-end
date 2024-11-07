import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
  return (
    <div className="form-container">
     
      <form>

          <label>Email</label>
          <input type="email" placeholder="Enter email" />

        

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

        
        <p>Don't have an account <Link to="/Register" className="register-link">Register?</Link></p>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
