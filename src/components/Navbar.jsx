import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <div className="rounded-lg p-2 bg-gradient-to-tr from-blue-400 to-purple-400 font-bold text-white text-3xl hover:scale-105 transition">
          SS
        </div>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={(({ isActive }) => isActive ? "text-blue-600" : "text-slate-800") + " hover:scale-105 hover:text-black transition" }>
          About
        </NavLink>
        <NavLink to='/projects' className={(({ isActive }) => isActive ? "text-blue-600" : "text-slate-800") + " hover:scale-105 hover:text-black transition"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
