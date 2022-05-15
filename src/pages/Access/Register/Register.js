
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const [email, setEmail] = useState({value: "", error: ""});
    const [password, setPassword] = useState({value: "", error: ""});


    const [
        createUserWithEmailAndPassword,
        user,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

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

      const handlePasswordChange = e =>{
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
                                              
     const handleRegister = async e => {
         e.preventDefault();
        if(email.value === ""){
            setEmail({value: "", error: "Email is required"});
        }else if(password.value === ""){
            setPassword({value: "", error: "Password required"});
        }

        await createUserWithEmailAndPassword(email.value, password.value);
     }

     const navigate = useNavigate();
     const location = useLocation();
     let from = location.state?.from?.pathname || "/";

     useEffect(()=>{
         if(user){
             navigate(from, {replace:true});
         }
     },[user]);

    return (
        <div className="container w-50 mx-auto">
            <h5 className="text-center fw-bold mt-4">CREATE ACCOUNT</h5>
            <form onSubmit={handleRegister} className="form">
               <input type="text" name="name" id="name" placeholder="Full Name"/>
               <input onBlur={handleEmailChange} type="email" name="email" id="email" placeholder="Email" />
               {email.error && <p className="text-danger">{email.error}</p>}
               <input onBlur={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" />
               {password.error && <p className="text-danger">{password.error}</p> }
               <input className="bg-primary text-white" type="submit" value="Register" />
            </form>
            <p className="text-center">Already have an account?<Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;