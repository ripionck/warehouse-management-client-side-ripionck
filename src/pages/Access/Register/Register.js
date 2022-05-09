import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


     const handleRegister = e => {
         e.preventDefault();
         const email = e.target.email.value;
         const password = e.target.password.value;
         console.log(email, password)

         createUserWithEmailAndPassword(email, password)
     }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
               <input type="text" name="name" id="name" placeholder="Full Name"/>
               <input type="email" name="email" id="email" placeholder="Email" />
               <input type="password" name="password" id="password" placeholder="Password" />
               <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;