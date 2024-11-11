import { useEffect } from "react";
import { useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);


    useEffect(() => {
         fetch('./GadgetsData.json')
         .then(res => res. json())
         .then(data => setGadgets(data))
    },[])



    return (
        <div>
           <h2 className="text-4xl font-bold text-center ">Explore Cutting-Edge Gadgets</h2>
           <div className="flex gap-4 ">
           <div className="grid grid-cols-1 my-80 ml-10">
                  <button className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20">All Product</button>
                  <button className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20">Laptops</button>
                  <button className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20">Phones</button>
                  <button className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20">Accessories</button>
                  <button className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20">Smart Watches</button>
                  <button className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20">MacBook</button>
                  <button className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20">Iphone</button>
           </div>
           
           <div className="grid grid-cols-3 gap-4  mx-64 my-8" >
            {
                gadgets.map(gadget => <Gadget  gadget={gadget} key={gadget.product_id} ></Gadget>)
            }
           </div>
           </div>
          
        </div>
    );
};

export default Gadgets;