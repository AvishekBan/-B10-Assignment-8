import im2 from "../../assets/Frame (3).png";
import im3 from "../../assets/Frame (2).png";
import { Link } from "react-router-dom";
const NavBar = () => {
   const links = (
      <>
         <li>
            <Link to="/" className="text-white font-bold">
               Home
            </Link>
         </li>
         <li>
            <Link to="/statistics" className="text-white font-bold">
               Statistics
            </Link>
         </li>
         <li>
            <Link to="/dashboard" className="text-white font-bold">
               Dashboard
            </Link>
         </li>
      </>
   );

   return (
      <div className="navbar bg-purple-600 rounded-t-2xl ">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
               >
                  {links}
               </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white font-bold">Gadget Heaven</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
         </div>
         <div className="navbar-end gap-2 ">
            <a className="btn  rounded-full">
               <img src={im2} alt="" />
            </a>
            <a className="btn rounded-full">
               <img src={im3} alt="" />
            </a>
         </div>
      </div>
   );
};

export default NavBar;
