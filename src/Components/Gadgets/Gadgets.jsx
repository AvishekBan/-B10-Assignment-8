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
           <h2 className="text-4xl font-bold text-center">Explore Cutting-Edge Gadgets</h2>
           <div className="grid grid-cols-3 gap-4  border-blue-700 mx-64 " >
            {
                gadgets.map(gadget => <Gadget  gadget={gadget} key={gadget.product_id} ></Gadget>)
            }
           </div>
        </div>
    );
};

export default Gadgets;