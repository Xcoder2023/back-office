
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import BackOffice from './pages/BackOffice';
import EditPage from './components/EditPage';

function App() {
  const isLoggedIn = localStorage.getItem('user'); // Simulate user authentication
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard/*" element={isLoggedIn ? <BackOffice /> : <Navigate to="/" />} />
        <Route path="/dashboard/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
