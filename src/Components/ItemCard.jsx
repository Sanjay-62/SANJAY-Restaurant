import react from 'react'
import { AiOutlinePlus ,AiOutlineMinus} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart,incrementQty,decrementQty } from '../Redux/Slices/CartSlices';
import toast, { Toaster } from 'react-hot-toast';
const ItemCard=({id,price,imgSrc,qty,name,handleToast})=>{
  const dispatch=useDispatch();
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3' >
         <MdDelete onClick={()=>{dispatch(removeFromCart({id}))
        toast.error(`${name} Removed From Cart`);}} className='absolute right-7 text-gray-600 cursor-pointer' />  
         <img className='w-[50px] h-[50px]' src={imgSrc} alt="Image By SWASTIK Restaurant" />
    <div className="leading-5">
        <h2 className='font-bold text-gray-800'>{name}</h2>
       <div className="flex justify-between"> 
        <span className='text-red-500 font-bold '>&#8377;{price}</span>
        <div className='flex justify-center items-center gap-2 absolute right-7 '>
         <AiOutlineMinus onClick={() =>{ qty > 1 ? dispatch(decrementQty({ id })) : dispatch(removeFromCart({ id })); toast.error(`${name} Removed From Cart`);}} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' /> 
<span>{qty}</span>
<AiOutlinePlus onClick={() =>{ dispatch(incrementQty({ id })); handleToast(name)}} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
 </div></div></div></div>
 )}
export default ItemCard;