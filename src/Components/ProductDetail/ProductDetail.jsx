import { useParams } from "react-router-dom";
import img4 from '../../assets/Frame (1).png';
import img5 from '../../assets/Frame (2).png';

const ProductDetail = () => {
   const {product_id,product_image,product_title,price,specification} = useParams();
   console.log(product_title);
    return (
        <div>
            <img src={product_image} alt="" />
            <h1>{product_title}</h1>
            <p>Price:{price}</p>
            <h3>Specification:</h3>
            <p> {specification}</p>
            <h4>Rating ⭐ </h4>
            <div className="flex gap-3">
            <button className="btn bg-purple-600 text-white rounded-3xl text-lg font-bold">Add To Card <img src={img4} alt="" /> </button> <button className="btn"><img src={img5} alt="" /></button>
            </div>
           
            


            <h2>Product Details:{product_id}</h2>
        </div>
    );
};

export default ProductDetail;