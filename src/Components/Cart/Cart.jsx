import img8 from "../../assets/close.png";
import img6 from "../../assets/sort.png";
const Cart = ({ gadget }) => {
   const { product_image, product_title, description, price } = { gadget };
   return (
      <div>
         <div className="bg-white flex justify-between">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="flex gap-2 mr-10 items-center">
               <h1 className="text-xl font-bold">Total cost:</h1>
               <button className="btn bg-white border-purple-500 text-purple-600 rounded-3xl">
                  Sort by Price <img src={img6} alt="" />
               </button>
               <button className="btn bg-purple-600 text-white rounded-3xl">Purchase</button>
            </div>
         </div>

         <div className="bg-white">
            <img className="h-[150px] w-[180px] rounded-xl" src={product_image} alt="" />
            <div>
               <h1 className="text-black">bb{product_title}</h1>
               <p>bb{description}</p>
               <p>Price:{price}</p>
            </div>
            <img src={img8} alt="" />
         </div>
      </div>
   );
};

export default Cart;
