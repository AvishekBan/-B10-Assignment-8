import { useState } from "react";
import Wishlist from "../Wishlist/Wishlist";
import Cart from "../Cart/Cart";

const Dashboard = () => {
   const [cartVisibility, setCartVisibility] = useState(true);
   const [wishlistVisibility, setWishlistVisibility] = useState(false);
   return (
      <>
         <div className="text-center bg-purple-600 rounded-b-2xl">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-300 font-semibold">
               Explore the latest gadgets that will take your experience to the next level. From
               smart devices to <br /> the coolest accessories, we have it all!
            </p>
            <div className=" flex gap-2 justify-center py-6">
               <button
                  onClick={() => {
                     setCartVisibility(true);
                     setWishlistVisibility(false);
                  }}
                  className="btn font-bold rounded-3xl px-14  border-purple-600"
               >
                  Cart
               </button>
               <button
                  onClick={() => {
                     setCartVisibility(false);
                     setWishlistVisibility(true);
                  }}
                  className="btn font-bold rounded-3xl px-14 border-purple-600"
               >
                  Wishlist
               </button>
            </div>
         </div>
         <div>
            {cartVisibility && (
               <>
                  <Cart />
               </>
            )}
            {wishlistVisibility && (
               <>
                  <Wishlist />
               </>
            )}
         </div>
      </>
   );
};

export default Dashboard;
