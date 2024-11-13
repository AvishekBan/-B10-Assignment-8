import { useEffect } from "react";
import { useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
   const [gadgets, setGadgets] = useState([]);
   const [category, setCategory] = useState("");
   const [filteredGadgets, setFilteredGadgets] = useState([]);
   useEffect(() => {
      fetch("./GadgetsData.json")
         .then((res) => res.json())
         .then((data) => setGadgets(data));
   }, []);

   useEffect(() => {
      switch (category) {
         case "All":
            setFilteredGadgets(gadgets);
            break;
         case "Laptops":
            setFilteredGadgets(gadgets.filter((gadget) => gadget.category === "Laptops"));
            break;
         case "Phones":
            setFilteredGadgets(gadgets.filter((gadget) => gadget.category === "Phones"));
            break;
         case "Accessories":
            setFilteredGadgets(gadgets.filter((gadget) => gadget.category === "Accessories"));
            break;
         case "Smart Watches":
            setFilteredGadgets(gadgets.filter((gadget) => gadget.category === "Smart Watches"));
            break;
         case "MacBook":
            setFilteredGadgets(gadgets.filter((gadget) => gadget.category === "MacBook"));
            break;
         case "Iphone":
            setFilteredGadgets(gadgets.filter((gadget) => gadget.category === "Iphone"));
            break;
         default:
            setFilteredGadgets(gadgets);
            break;
      }
   }, [category, gadgets]);

   return (
      <div>
         <h2 className="text-4xl font-bold text-center ">Explore Cutting-Edge Gadgets</h2>
         <div className="flex gap-4 ">
            <div className="grid grid-cols-1 my-80 ml-10">
               <button
                  onClick={() => setCategory("All")}
                  className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20"
               >
                  All Product
               </button>
               <button
                  onClick={() => setCategory("Laptops")}
                  className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20"
               >
                  Laptops
               </button>
               <button
                  onClick={() => setCategory("Phones")}
                  className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20"
               >
                  Phones
               </button>
               <button
                  onClick={() => setCategory("Accessories")}
                  className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20"
               >
                  Accessories
               </button>
               <button
                  onClick={() => setCategory("Smart Watches")}
                  className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20"
               >
                  Smart Watches
               </button>
               <button
                  onClick={() => setCategory("MacBook")}
                  className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20"
               >
                  MacBook
               </button>
               <button
                  onClick={() => setCategory("Iphone")}
                  className="btn bg-white rounded-3xl border-purple-700 text-gray-600 font-bold px-20"
               >
                  Iphone
               </button>
            </div>

            <div className="grid grid-cols-3 gap-4  mx-64 my-8">
               {filteredGadgets.map((gadget) => (
                  <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Gadgets;
