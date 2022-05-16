import React, { useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
      ] = useSignInWithEmailAndPassword(auth);
      const [token] = useToken(user);
       
      const handleEmailChange = e =>{
        const email = e.target.value;
        const emailRegex = /^\S+@\S+\.\S+$/;
        const validEmail = emailRegex.test(email);
      
        if(validEmail){
           setEmail({value: email, error: ""});
       }else{
           setEmail({value:"", error:"Please enter a valid Email"});
       }
      
    };

    const handlePasswordChange = e => {
      const password = e.target.value;
      const passRegex = /.{6,}/;
      const validPass = passRegex.test(password);
  
      if(password.length < 6){
        setPassword({value: "", error: "Password too short"});
    }else if(!validPass){
        setPassword({value: "", error: "Minimum 6 characters"});
    }else{
        setPassword({value: password, error: ""});
    }
    };
  
     
      const handleLogin = async e =>{
          e.preventDefault();
          if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
          }
      
          if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
          }
          await signInWithEmailAndPassword(email.value, password.value);
          e.target.reset();
      };
      
        if(token){
          navigate(from, {replace: true});
        }

    return (
        <div className="w-50 mx-auto">
          <h3 className="text-center mt-5 mb-3" style={{fontFamily: "Rockwell"}}>LOGIN HERE</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Control onBlur={handleEmailChange} type="email"  name="email" placeholder="Enter email" />
              </Form.Group>
              {email.error && (<p className='error'>{email.error}</p>)}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onBlur={handlePasswordChange} type="password" name="password" placeholder="Password" />
              </Form.Group>
              {password.error && (
              <p className='error'> {password.error}</p>)}
               <div className="d-flex justify-content-center mb-3">
                 <Button className="w-50 mx-auto" type="submit" variant="primary" style={{fontFamily: "Rockwell"}}>Login</Button>
            </div>
            </Form>
            <p className="text-center">Forgot password?<Link to="/resetPass" className='text-danger text-decoration-none ms-1' style={{fontFamily: "Rockwell"}}>Reset password</Link></p>
            <p className="text-center">Don't have an account? <Link to="/register" className='text-primary pe-auto text-decoration-none' style={{fontFamily: "Rockwell"}}>Create an account</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;