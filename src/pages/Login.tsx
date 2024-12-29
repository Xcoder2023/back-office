import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);
  
    try {
      if (!email || !password) {
        setError('Please fill out both email and password.');
        // console.log('Validation failed: Missing email or password.');
        return;
      }
      const response = await axios.post(
        'https://web-api-775r.onrender.com/login',
        { email, password },
        { withCredentials: true }
      );
      if (response.status === 200 && response.data.message === 'Login succesful') { 
        setMessage('Login successful!');
        setTimeout(() => {
          login();
          navigate('/dashboard');
        }, 2000);
      } else {
        setError('Invalid login credentials');
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'An error occurred during login.';
      setError(errorMessage);
      // console.error('Error message set:', errorMessage);
    } finally {
      setLoading(false);
    }
  };
  

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setMessage(null);
    setError(null);
    setLoading(true);

    try {
      if (firstName && lastName && phoneNumber && email && password) {
        const response = await axios.post('https://web-api-775r.onrender.com/register', {
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          email,
          password,
        });
        setMessage(response.data.message);
        setIsLogin(true); 
      } else {
        setError('Please fill out all fields.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-teal-300">
      <div
        className={`bg-white p-6 rounded-[3px] shadow-lg w-96 transition-all duration-500 ${
          isLogin ? 'h-[400px]' : 'h-[550px]'
        }`}
      >
        <div className="flex justify-between my-5">
          <h1 className="text-2xl font-bold">{isLogin ? 'ADMIN Login' : 'Sign Up'}</h1>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-[30%] bg-teal-300 text-white p-2 rounded"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <div className="transition-opacity duration-500 flex flex-col gap-5 h-[100%]">
            <form action="" className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email"
                className="border p-4 w-full mb-4 outline-none border-teal-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-4 w-full mb-6 outline-none border-teal-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleLogin}
                className={`w-full bg-teal-500 text-white p-4 rounded ${
                  loading ? 'opacity-50' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            {/* Success Message */}
            {message && (
              <p className="-mt-2 text-green-500 text-center font-medium">{message}</p>
            )}

            {/* Error Message */}
            {error && (
              <p className="-mt-2 text-red-600 text-center font-medium">{error}</p>
            )}
          </div>
        ) : (
          /* Registration Form */
          <div className="transition-opacity duration-500 rounded-lg h-[100%]">
            <form action="" className="flex flex-col gap-5 mt-5">
              <input
                type="text"
                placeholder="First Name"
                className="border p-4 w-full outline-none border-teal-200"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-4 w-full outline-none border-teal-200"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-4 w-full outline-none border-teal-200"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-4 w-full outline-none border-teal-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-4 w-full outline-none border-teal-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleSignUp}
                className={`w-full bg-teal-500 text-white p-2 rounded ${
                  loading ? 'opacity-50' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Sign Up'}
              </button>
            </form>

            {/* Success Message */}
            {message && (
              <p className="mt-4 text-green-500  text-center font-normal text-sm">{message}</p>
            )}

            {/* Error Message */}
            {error && (
              <p className="mt-4 text-red-600 text-center font-normal text-sm">{error}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
