import React from 'react'
import { Route, Routes } from 'react-router-dom';
import TodoComponent from './components/TodoComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import NotFound from './components/NotFound';
import ProtectedRoutes from './middleware/ProtectedRoutes';

function Views() {
    return (
        <Routes>
            <Route path="/register" exact element={<RegisterComponent />} />
            <Route element={<ProtectedRoutes />} >
                <Route path="/todoApp" element={<TodoComponent />} />
            </Route>
            <Route index element={<LoginComponent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
 
export default Views


