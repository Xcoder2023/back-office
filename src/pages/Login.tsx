import React, { useState } from 'react';

const Login:React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username }));
      window.location.href = '/dashboard';
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-teal-300">
      <div className="bg-white p-6 rounded-[3px] shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">ADMIN Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-8 outline-none border-teal-200"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full my-3 outline-none border-teal-200"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full bg-teal-500 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
