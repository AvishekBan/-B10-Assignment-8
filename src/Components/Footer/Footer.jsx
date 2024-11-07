const Footer = () => {
   return (
    <div>
        <div className="text-center ">
            <h1 className="text-3xl font-bold py-3">Gadget Heaven</h1>
            <p className="text-gray-600 font-semibold pb-10">Leading the way in cutting-edge technology and innovation.</p>
        </div>
 <footer className="footer  text-neutral-content justify-around px-52  ">
         <nav className="justify-items-center">
            <h6 className="text-lg font-bold text-black">Services</h6>
            <a className="link link-hover font-semibold text-gray-700">Product Support</a>
            <a className="link link-hover font-semibold text-gray-700">Order Tracking</a>
            <a className="link link-hover font-semibold text-gray-700">Shipping & Delivery</a>
            <a className="link link-hover font-semibold text-gray-700">Returns</a>
         </nav>
         <nav className="justify-items-center">
            <h6 className="text-lg font-bold text-black">Company</h6>
            <a className="link link-hover font-semibold text-gray-700">About us</a>
            <a className="link link-hover font-semibold text-gray-700">Careers</a>
            <a className="link link-hover font-semibold text-gray-700">Contact</a>
        </nav>
         <nav className="justify-items-center">
            <h6 className="text-lg font-bold text-black">Legal</h6>
            <a className="link link-hover font-semibold text-gray-700">Terms of Service</a>
            <a className="link link-hover font-semibold text-gray-700">Privacy policy</a>
            <a className="link link-hover font-semibold text-gray-700">Cookie policy</a>
         </nav>
      </footer>
    </div>
     
   );
};

export default Footer;
