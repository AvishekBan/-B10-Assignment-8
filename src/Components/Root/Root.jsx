import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
   return (
   <div className=" mx-6 my-6 ">
         <NavBar></NavBar>
         <Outlet></Outlet> 
         <Footer></Footer>
   </div>
   );
};

export default Root;
