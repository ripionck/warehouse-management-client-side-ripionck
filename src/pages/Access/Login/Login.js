import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Banner from '../../Banner/Banner';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
 
  const navigate = useNavigate();
  const location = useLocation();
  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      let from = location.state?.from?.pathname || '/';
      
      const handleLogin = async e =>{
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email, password)

          await signInWithEmailAndPassword(email, password);
      }

      if(user){
        const url = 'https://aqueous-plains-79132.herokuapp.com/login';
        axios.post(url, {
          email : user.email
        }).then(data=>{
          localStorage.setItem("accessToken", data.token);
          navigate(from, {replace: true});
        })
      
    }

    return (
        <div className="w-50 mx-auto">
            <Banner></Banner>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Control type="email"  name="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-center mb-3">
                <Button className="w-50 mx-auto" type="submit" variant="primary">Login</Button>
            </div>
            <p className="text-center">Forgot password?<Link to="/resetPass" className='text-danger text-decoration-none ms-1' >Reset password</Link></p>
            <p className="text-center">Don't have an account? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Create an account</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;