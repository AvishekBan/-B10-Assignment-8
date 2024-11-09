

const Gadget = ({gadget}) => {
    const {product_image, product_title, price}=gadget;
    return (
        <div className="shadow-xl p-6 ">
           <img className="h-[166px] py-2 rounded-2xl mx-8" src={product_image} alt="" />
           <h1 className="text-xl font-bold">{product_title}</h1>
           <p className="font-semibold text-gray-500 py-2">Price:{price}k</p> 
           <button className="btn bg-white text-purple-600 rounded-3xl border-purple-800">View Details</button>
        </div>
    );
};

export default Gadget;