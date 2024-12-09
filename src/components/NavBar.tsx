const Navbar: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <nav className="flex items-center justify-between py-4 px-10 bg-white shadow-sm sticky top-0">
        
      <div className="text-lg font-bold"> <img src="/images/ssilogo.jpg" alt="" width={60} height={60}/>
      <span className="text-teal-500">Serene Scheal Health Initiative</span></div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hello, {user.username || 'User'}</span>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = '/';
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    {/* </div> */}
    </nav>
  );
};

export default Navbar;