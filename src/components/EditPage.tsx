import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './NavBar';

const EditPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, date }: any = location.state;

  const [editedName, setEditedName] = useState(name);
  const [editedDate, setEditedDate] = useState(date);

  const handleSave = () => {
    alert('Changes saved successfully!');
    navigate('/dashboard');
    // Add API call or state update logic here
  };

  return (
    <>
     <Navbar />
    <div className="p-6 max-w-3xl mx-auto bg-white border rounded-md mt-10">
      
    <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name</label>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          required
        />
      </div>

      {/* Date Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Date</label>
        <input
          type="date"
          value={editedDate}
          onChange={(e) => setEditedDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          required
        />
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Save Changes
      </button>
    </form>
  </div>
  </>
  );
};

export default EditPage;
