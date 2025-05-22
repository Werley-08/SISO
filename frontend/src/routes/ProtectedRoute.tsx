import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem('token');

    return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;