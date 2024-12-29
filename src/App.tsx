import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import BackOffice from './pages/BackOffice';
import EditPage from './components/EditPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path="/" element={<LoginRedirect />} />
          
          {/* Protected route for BackOffice */}
          <Route path="/dashboard/*" element={<PrivateRoute><BackOffice /></PrivateRoute>} />
          
          {/* Edit page */}
          <Route path="/dashboard/edit/:id" element={<PrivateRoute><EditPage /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function LoginRedirect() {
  const { isLoggedIn } = useAuth();

  
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  
  return <Login />;
}

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  
  // If the user is not logged in, redirect them to the login page
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default App;
