import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img7 from "../../assets/close.png";
import { useEffect, useState } from "react";
const Wishlist = () => {
   const [wishlistItems, setWishlistItems] = useState([]);
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch("./GadgetsData.json")
         .then((res) => res.json())
         .then((data) => setData(data));
   }, []);

   // Fetch cart data from localStorage and filter matching products
   useEffect(() => {
      const cart = JSON.parse(localStorage.getItem("wishlist")) || [];
      const filteredItems = data.filter((product) => cart.includes(product.product_id)); // Filter products
      setWishlistItems(filteredItems);
   }, [data]);
   const handleAddToCart = (id) => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (!cart.includes(id)) {
         cart.push(id);
         localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
         toast.success("Product added to cart!");
      } else {
         toast.error("Product is already in the cart!");
      }
   };

   const handleRemoveFromWish = (id) => {
      const updatedWishlist = wishlistItems.filter(
         (wishlistItems) => wishlistItems.product_id !== id
      );
      setWishlistItems(updatedWishlist);
      // Update localStorage
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const updatedLocalWishlist = wishlist.filter((wishlistId) => wishlistId !== id); // Remove ID from localStorage cart
      localStorage.setItem("wishlist", JSON.stringify(updatedLocalWishlist));
   };

   return (
      <div className=" bg-white ml-56">
         <ToastContainer position="top-center" />
         <h1 className="text-xl font-bold">WishList</h1>
         {wishlistItems.map((wishlist) => (
            <>
               <div className=" flex gap-8 ">
                  <img
                     className="h-[150px] w-[180px] rounded-xl"
                     src={wishlist.product_image}
                     alt=""
                  />
                  <div>
                     <h1 className="text-xl font-semibold">{wishlist.product_title}</h1>
                     <p>
                        <b>Description</b>:{wishlist.description}
                     </p>
                     <p className="text-gray-500 font-bold">Price:${wishlist.price}</p>
                     <button
                        onClick={() => handleAddToCart(wishlist.product_id)}
                        className="btn text-white bg-purple-600 px-6 rounded-3xl"
                     >
                        Add to Cart
                     </button>
                  </div>
                  <button
                     className="mx-4 border border-red-600 rounded-full mt-14 h-6"
                     onClick={() => handleRemoveFromWish(wishlist.product_id)}
                  >
                     <img className="" src={img7} alt="" />
                  </button>
               </div>
            </>
         ))}
      </div>
   );
};

export default Wishlist;
