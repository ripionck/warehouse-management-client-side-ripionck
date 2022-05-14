
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, error1] = useUpdateProfile(auth);
      const navigate = useNavigate();
      if(user){
          navigate("/home")
      }
                                              
     const handleRegister = async e => {
         e.preventDefault();
         const name = e.target.name.value;
         const email = e.target.email.value;
         const password = e.target.password.value;
         console.log(email, password)

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName:name}); 
     }

    return (
        <div className="container w-50 mx-auto">
            <h5 className="text-center fw-bold mt-4">CREATE ACCOUNT</h5>
            <form onSubmit={handleRegister} className="form">
               <input type="text" name="name" id="name" placeholder="Full Name"/>
               <input type="email" name="email" id="email" placeholder="Email" />
               <input type="password" name="password" id="password" placeholder="Password" />
               <input className="bg-primary text-white" type="submit" value="Register" />
            </form>
            <p className="text-center">Already have an account?<Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;