import img7 from "../../assets/close.png";
const Wishlist = ({ gadget }) => {
   const { product_image, product_title, description, price } = { gadget };
   return (
      <div>
         <h1 className="text-md font-bold">WishList</h1>
         <div className="flex bg-white ">
            <img className="h-[150px] w-[180px] rounded-xl" src={product_image} alt="" />
            <div>
               <h1>{product_title}</h1>
               <p>Description:{description}</p>
               <p>Price:{price}</p>
               <button className="btn text-white bg-purple-600 px-6 rounded-3xl">
                  Add to Card
               </button>
            </div>
            <img className="" src={img7} alt="" />
         </div>
      </div>
   );
};

export default Wishlist;
