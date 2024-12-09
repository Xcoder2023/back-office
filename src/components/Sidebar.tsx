import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const activeClassName = "bg-black";

  return (
    <div className="w-64 bg-teal-500 h-screen text-white flex flex-col fixed top-10">
      <div className="p-4 text-2xl font-bold">Back Office</div>
      <nav className="flex-1">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `block p-4 hover:bg-gray-700 ${isActive ? activeClassName : ""}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/blogs"
          className={({ isActive }) =>
            `block p-4 hover:bg-gray-700 ${isActive ? activeClassName : ""}`
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/dashboard/events"
          className={({ isActive }) =>
            `block p-4 hover:bg-gray-700 ${isActive ? activeClassName : ""}`
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/dashboard/emails"
          className={({ isActive }) =>
            `block p-4 hover:bg-gray-700 ${isActive ? activeClassName : ""}`
          }
        >
          Emails
        </NavLink>
        <NavLink
          to="/dashboard/plans"
          className={({ isActive }) =>
            `block p-4 hover:bg-gray-700 ${isActive ? activeClassName : ""}`
          }
        >
          Plans
        </NavLink>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `block p-4 hover:bg-gray-700 ${isActive ? activeClassName : ""}`
          }
        >
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
