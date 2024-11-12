import { useLoaderData, useParams } from "react-router-dom";
import img4 from "../../assets/Frame (1).png";
import img5 from "../../assets/Frame (2).png";
import ReactStars from "react-rating-stars-component";

const ProductDetail = () => {
   const { id } = useParams();
   const data = useLoaderData();
   const mainData = data.find((phone) => phone.product_id === id);
   console.log(mainData);

   const ratingChanged = (newRating) => {
      console.log(newRating);
   };

   return (
      <div>
         <div className="bg-purple-600 text-center rounded-xl py-6">
            <h1 className=" text-2xl font-bold text-white ">Product Details</h1>
            <p className=" text-gray-200 py-2">
               Explore the latest gadgets that will take your experience to the next level. From
               smart devices to <br /> the coolest accessories, we have it all!
            </p>
         </div>

         <div className="flex py-4 ml-52">
            <img className="h-[400px] px-2  w-[500px]" src={mainData.product_image} alt="" />
            <div>
               <h1 className="text-xl font-bold">{mainData.product_title}</h1>
               <p className="font-semibold text-gray-500 py-2">Price:{mainData.price}</p>
               {mainData.availability === true ? (
                  <button className="border border-green-800 rounded-3xl text-green-800 px-4 hover:bg-gray-400 font-semibold">
                     In Stock
                  </button>
               ) : (
                  <>
                     <button className="border border-red-800 rounded-3xl text-red-800 px-4 hover:bg-gray-400 font-semibold">
                        Stock Out
                     </button>
                  </>
               )}
               <h3 className="font-semibold text-gray-500 py-2">{mainData.description}</h3>
               <h3 className="font-bold">Specification:</h3>
               <p className="font-semibold text-gray-500 py-2"> {mainData.specification}</p>
               <h4 className="font-bold">Rating ⭐ </h4>
               <p className="py-2">
                  <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
               </p>
               <div className="flex gap-3 ">
                  <button className="btn bg-purple-600 text-white rounded-3xl text-lg font-bold">
                     Add To Card <img src={img4} alt="" />{" "}
                  </button>{" "}
                  <button className="btn">
                     <img src={img5} alt="" />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetail;
