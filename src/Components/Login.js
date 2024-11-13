import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from "../Components/Auth"; 
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { login, error, loading } = useContext(AuthContext); // Get login function and error from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useHistory();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const loginUser = async (e) => {
        e.preventDefault();
        await login(email, password, () => navigate.push("/Allstudents"));
    };

    return ( 
        <div className='col-md-6 offset-md-3 addStudent'>
            <div className='form-content'>
                <h4 align="center">Login</h4>
                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            required 
                            onChange={handleEmail} 
                            placeholder="Enter email" 
                            name="email" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            required 
                            onChange={handlePassword} 
                            placeholder="Password" 
                            name="password" 
                        />
                    </Form.Group>
                    {error && <p className="text-danger">{error}</p>}
                    <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;