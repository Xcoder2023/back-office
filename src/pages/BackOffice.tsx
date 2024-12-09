import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/NavBar';
import Dashboard from '../components/Dashboard';
import Blogs from '../components/Blogs';
import Events from '../components/Events';
import Emails from '../components/Emails';
import Plans from '../components/Plans';
import Profile from '../components/Profile';

const BackOffice:React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/emails" element={<Emails />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default BackOffice;
