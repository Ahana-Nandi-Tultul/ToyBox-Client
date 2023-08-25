import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loadeing} = useContext(AuthContext);
    if(loadeing){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }

    return <Navigate to ="/"/>
};

export default PrivateRoutes;