import img1 from "../../assets/banner.jpg";

const Banner = () => {
   return (
      <div className="bg-purple-600  text-center rounded-xl">
         <div className=" ">
            <h1 className="text-4xl font-bold text-white  py-6">
               Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p className="text-gray-300 py-4">
               Explore the latest gadgets that will take your experience to the next level. From
               smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn rounded-3xl px-6 font-bold text-purple-700 bg-white ">
               Shop Now
            </button>
         </div>

         <img className="w-2/4 mx-auto rounded-2xl my-8 " src={img1} alt="" />
      </div>
   );
};

export default Banner;
