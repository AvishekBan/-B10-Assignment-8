import img8 from "../../assets/close.png";
import img6 from "../../assets/sort.png";
import img9 from "../../assets/Group.png";
import { useState, useEffect } from "react";

const Cart = () => {
   const [cartItems, setCartItems] = useState([]);
   const [sortedItems, setSortedItems] = useState([]);
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch("./GadgetsData.json")
         .then((res) => res.json())
         .then((data) => setData(data));
   }, []);

   // Fetch cart data from localStorage and filter matching products
   useEffect(() => {
      const cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage
      const filteredItems = data.filter((product) => cart.includes(product.product_id)); // Filter products
      setCartItems(filteredItems);
      setSortedItems(filteredItems); // Initialize sorted items
   }, [data]);

   // Function to handle sorting by price
   const handleSortByPrice = () => {
      const sorted = [...sortedItems].sort((a, b) => b.price - a.price);
      setSortedItems(sorted);
   };

   // Function to remove item from cart
   const handleRemoveFromCart = (id) => {
      const updatedCart = cartItems.filter((item) => item.product_id !== id); // Remove from cartItems state
      setCartItems(updatedCart);
      setSortedItems(updatedCart);

      // Update localStorage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedLocalCart = cart.filter((cartId) => cartId !== id); // Remove ID from localStorage cart
      localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
   };

   // Calculate total cost
   const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

   return (
      <div>
         {/* Open the modal using document.getElementById('ID').showModal() method */}

         <dialog id="my_modal_1" className="modal">
            <div className="modal-box max-h-fit pb-6">
               <img className="mx-48" src={img9} alt="" />
               <h1 className="font-bold text-lg text-center">Payment Successfully</h1>
               <p className="py-4 text-center">
                  Thanks for purchasing. <br /> Total:${totalCost.toFixed(2)}
               </p>
               <div className="modal-action justify-center">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn px-20">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
         {/* Cart Header */}
         <div className="bg-white flex justify-between p-4 shadow-md">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex gap-4 items-center">
               <h1 className="text-xl font-bold">Total cost: ${totalCost.toFixed(2)}</h1>
               <button
                  onClick={handleSortByPrice}
                  className="btn bg-white border-purple-500 text-purple-600 rounded-3xl px-4 flex items-center gap-2"
               >
                  Sort by Price <img src={img6} alt="Sort Icon" />
               </button>
               <button
                  onClick={() => document.getElementById("my_modal_1").showModal()}
                  className="btn bg-purple-600 text-white rounded-3xl px-4"
               >
                  Purchase
               </button>
            </div>
         </div>

         {/* Cart Items */}
         <div className="p-4">
            {sortedItems.length === 0 ? (
               <p className="text-center text-gray-500 text-lg">Your cart is empty!</p>
            ) : (
               <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
                  {sortedItems.map((item) => (
                     <div
                        key={item.product_id}
                        className="bg-white border rounded-lg p-4 shadow-md flex "
                     >
                        <img
                           className="h-[150px] w-[180px] rounded-xl mb-4 mx-2"
                           src={item.product_image}
                           alt={item.product_title}
                        />
                        <div>
                           <div className="pt-8">
                              <h1 className="text-xl font-bold">{item.product_title}</h1>
                              <p className="text-gray-600">{item.description}</p>
                              <p className="text-gray-500 font-bold">Price: ${item.price}</p>
                           </div>
                        </div>
                        <button
                           onClick={() => handleRemoveFromCart(item.product_id)}
                           className="ml-8 flex items-center   h-6  border border-red-600 rounded-full mt-14"
                        >
                           <img className="" src={img8} alt="Remove Icon" />
                        </button>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default Cart;
