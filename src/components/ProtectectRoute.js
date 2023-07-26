import React from 'react'
import { Navigate } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
    const checkValidToken = () => {
        const token = sessionStorage.getItem('token');
        // Add your token validation logic here
        return token !== null && token !== undefined;
    };

    return (
        <>
            {
                checkValidToken() ? Component : <Navigate to="/login" replace={true} />

            }
        </>




    )
}

export default ProtectedRoute