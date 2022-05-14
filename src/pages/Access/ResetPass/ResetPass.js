import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const ResetPass = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );

    const handleResetPassword = async e =>{
        e.preventDefault();

        await sendPasswordResetEmail(email);
          alert("Sent email!")
      }
    return (
        <div className="container w-50 mx-auto">
            <h3 className="text-center fw-bold mt-5 mb-3">Did you forgot your password?</h3>
            <p>Enter your email address you're using for your account below and we will send you a password reset link.</p>
            <form onSubmit={handleResetPassword} className="d-flex flex-column mb-2">
                <label className="fw-bold" htmlFor="email">Email Address</label>
                <input  onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} id="" placeholder="Enter Email" />
                 <input className="mt-2 bg-primary border-0 py-1 rounded text-white" type="submit" value="Reset Password" />
            </form>
            <Link className="d-flex justify-content-center" to="/login">Back to Login</Link>
        </div>
    );
};

export default ResetPass;