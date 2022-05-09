import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../../firebase.init';

const RequiredAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <p>Loading.....</p>
    }
    if(user){
        return children;
    }
    else{
       return <Navigate to="/login" state={{from: location}} replace/>
    }
};

export default RequiredAuth;