import React from 'react';

const Register = () => {
    
  return (
    <div className="form-container">
      
      <form>
        
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" />


          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" />


          <label>Gender</label>
          <input type="text" placeholder="Enter gender" required /> 

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
