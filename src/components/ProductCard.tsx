import type { IProduct } from "../interfaces";
import { Slicer } from "../Utils/Functions";
import Button from "./Button";
import Image from "./Image";

interface EProps{
product : IProduct
}

const ProductCard = ({product} : EProps) =>{
  return(
   
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
                <Image imageURL={product.imageURL} alt={"Product Name"} className="rounded-md h-52 w-full lg:object-cover" />
             <h3>{product.title}</h3>
             <p>{Slicer(product.description)}</p>
            
            <div className="flex items-center justify-between space-x-2 mt-5">
              <div  className="flex">
            <span className="rounded-full w-5 h-5 m-1 bg-indigo-800"></span>
             <span className="rounded-full w-5 h-5 m-1 bg-red-800"></span>
             <span className="rounded-full w-5 h-5 m-1 bg-green-800"></span>
           </div>
            <Image imageURL={product.category.imageURL} alt={product.category.name}
             className="w-10 h-10  rounded-full border  border-blue-900"/>
           </div>
           <span>{`$${product.price}`}</span>
        <div className="flex items-center justify-between space-x-2 mt-5">

            <Button className="bg-indigo-800" onClick={()=> {console.log("clicked")}}>
            Edite
            </Button>
            <Button className="bg-red-800">Delete</Button>
        </div>
    </div>
  )
}
export default ProductCard;