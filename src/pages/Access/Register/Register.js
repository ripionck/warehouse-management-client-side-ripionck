
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
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
            <h2>Register</h2>
            <form onSubmit={handleRegister} className="form">
               <input type="text" name="name" id="name" placeholder="Full Name"/>
               <input type="email" name="email" id="email" placeholder="Email" />
               <input type="password" name="password" id="password" placeholder="Password" />
               <input type="submit" value="Register" />
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;