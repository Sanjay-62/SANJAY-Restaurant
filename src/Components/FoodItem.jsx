import react from 'react';
import FoodCart from './FoodCart';
import FoodData from '../Data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItem=()=>{
  const Category=useSelector((state)=>state.Category.Category);
  const Search=useSelector((state)=>state.Search.Search);
  const handleToast=(name)=>toast.success(`Added ${name}  to your Cart`);
 return (<>
  <Toaster position="top-center" reverseOrder={false}/>
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10' >
    {FoodData.filter((food)=>{
      if(Category==="ALL"){
        return food.name.toLowerCase().includes(Search.toLowerCase());
      }else{
       return  Category===food.category && food.name.toLowerCase().includes(Search.toLowerCase())

      }
    }).map((item)=>{
        return <FoodCart key={item.id} id={item.id} name={item.name} price={item.price} imgSrc={item.img} desc={item.desc} category={item.category} rating={item.rating} handleToast={handleToast}/>;
      })}</div></>
  )
}
export default FoodItem