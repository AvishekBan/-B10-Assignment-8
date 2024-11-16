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
         alert("Product added to cart!");
      } else {
         alert("Product is already in the cart!");
      }
   };

   const handleRemoveFromWish = (id) => {
      const updatedWishlist = wishlistItems.filter(
         (wishlistItems) => wishlistItems.product_id !== id
      );
      setWishlistItems(updatedWishlist);
   };
   return (
      <div className=" bg-white">
         <h1 className="text-md font-bold">WishList</h1>
         {wishlistItems.map((wishlist) => (
            <>
               <div className=" flex">
                  <img
                     className="h-[150px] w-[180px] rounded-xl"
                     src={wishlist.product_image}
                     alt=""
                  />
                  <div>
                     <h1>{wishlist.product_title}</h1>
                     <p>Description:{wishlist.description}</p>
                     <p>Price:{wishlist.price}</p>
                     <button
                        onClick={() => handleAddToCart(wishlist.product_id)}
                        className="btn text-white bg-purple-600 px-6 rounded-3xl"
                     >
                        Add to Cart
                     </button>
                  </div>
                  <button onClick={() => handleRemoveFromWish(wishlist.product_id)}>
                     <img className="" src={img7} alt="" />
                  </button>
               </div>
            </>
         ))}
      </div>
   );
};

export default Wishlist;
