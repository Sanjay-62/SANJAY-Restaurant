import react, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Cart=()=>{
  const handleToast=(name)=>toast.success(`Added ${name}  to your Cart`);
  const cartItems=useSelector((state)=>state.Cart.Cart);
  const [ActiveCart,setActiveCart]=useState(false);
  const totalQty=cartItems.reduce((totalQty,item)=>totalQty+item.qty,0);
  const totalPrice=cartItems.reduce((totalPrice,item)=>totalPrice+item.price*item.qty,0);
  const Navigate=useNavigate();
  return (<>
    <div className={` fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-5 mb-3 ${ActiveCart? "translate-x-0": "translate-x-full"} transition-all duration-500 z-50 `} >
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-800'>My Orders</span>
        <IoMdClose onClick={()=>setActiveCart(!ActiveCart)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-orange-300 hover:border-orange-300 cursor-pointer'/></div>
   { cartItems.length>0?cartItems.map((food)=>{
      return <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} imgSrc={food.imgSrc} qty={food.qty} handleToast={handleToast} />;
    }):<h2 className='text-center text-xl font-bold text-gray-600'>Your Cart Is Empty Please Buy Something Before CheckOut</h2>
   } 
    <div className="absolute bottom-0">
        <h3 className='font-semibold text-gray-800 '>Items: {totalQty}</h3>
        <h3 className='font-semibold text-gray-800 '>Total Amount:  &#8377;{totalPrice}</h3>
        <hr className='w-[90vw] lg:w-[18vw] my-2' />
        <button onClick={()=>Navigate("/success")}  className='font-bold bg-red-500 px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-6'>CheckOut</button>
    </div> </div>
 
    <FaShoppingCart  className={`rounded-full bg-white shadow-md text-5xl p-3  fixed bottom-4 right-4 ${totalQty>0&&"animate-bounce delay-500 transition-all"}`} onClick={()=>setActiveCart(!ActiveCart)}   /> 
  </>
  )
}
export default Cart