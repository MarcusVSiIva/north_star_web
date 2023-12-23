import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

export function AppRoutes() {
    return ( 
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign_in" element={<SignIn />} />
                    <Route path="/sign_up" element={<SignUp />} />
                    <Route path="/forgot_password" element={<ForgotPassword />} />
                </Routes>
            </div>
        </Router>
    );
}