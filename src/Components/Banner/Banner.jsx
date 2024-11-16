import img1 from "../../assets/banner.jpg";

const Banner = () => {
   return (
      <div className="bg-purple-600 text-center rounded-b-xl pb-[300px] relative mb-[350px]">
         {/* Text Section */}
         <div>
            <h1 className="text-4xl font-bold text-white py-6">
               Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p className="text-gray-300 py-4">
               Explore the latest gadgets that will take your experience to the next level. From
               smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn rounded-3xl px-6 font-bold text-purple-700 bg-white">
               Shop Now
            </button>
         </div>

         <div className="absolute inset-x-0 top-[60%] w-[60%] h-[500px] mx-auto p-5 bg-white/25 rounded-3xl border-[3px] border-white backdrop-blur-lg shadow-md">
            <img className="w-full h-full rounded-3xl object-center" src={img1} alt="Banner" />
         </div>
      </div>
   );
};

export default Banner;
