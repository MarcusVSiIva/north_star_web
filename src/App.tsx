import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SignIn from './pages/SignIn/index';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};