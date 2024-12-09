import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  // Handle Edit Profile button
  const handleEditProfile = () => {
    navigate('/edit-profile'); // Navigate to the edit profile page
  };



  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

      {/* Profile Picture */}
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">Admin</p>
        </div>
      </div>

      {/* Tabular Layout for Profile Details */}
      <table className="w-full border-collapse border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Field</th>
            <th className="border border-gray-300 p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 p-2">Email</td>
            <td className="border border-gray-300 p-2">john.doe@example.com</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 p-2">Phone</td>
            <td className="border border-gray-300 p-2">+123 456 7890</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 p-2">Last Login</td>
            <td className="border border-gray-300 p-2">Dec 7, 2024, 4:45 PM</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 p-2">Account Created</td>
            <td className="border border-gray-300 p-2">Jan 1, 2024</td>
          </tr>
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          // onClick={handleLogout}
          onClick={() => {
            localStorage.clear();
            window.location.href = '/';
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
