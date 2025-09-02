import react from 'react'
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlices';
const FoodCart=({id,name,desc,price,imgSrc,rating,handleToast})=>{
  const dispatch=useDispatch();
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
       <img src={imgSrc} loading="lazy" alt="image By SWASTIK Restraunt" className='w-auto h-[130px] hover:scale-110 overflow-hidden cursor-grab transition-all duration-500 ease-in-out'/> 
       <div className='text-sm flex justify-between'>
        <h2>{name}</h2>
        <span className='text-red-500'>&#8377;{price}</span>
       </div>
       <p className='text-sm font-normal'>{desc}...</p>
       <div className='flex justify-between'><span className='flex justify-center item-center'>
        <AiFillStar className='mr-1 text-yellow-400' />{rating}</span>
       <button onClick={()=>{dispatch(addToCart({id,name,price,rating,imgSrc,qty:1}));handleToast(name)}} className='p-1 text-white bg-red-500 hover:bg-red-600 rounded-lg text-sm'>Add To Cart</button>
    </div></div>
  )
}
export default FoodCart