import react,{useEffect, useState} from 'react';
import FoodData from '../Data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/Slices/CategorySlices';
const CategoryMenu=()=>{
  const [categories,setCategories]=useState([]);
  const listUniqueCategories=()=>{
    const uniquecategories=[... new Set(FoodData.map((food)=>food.category))];
    setCategories(uniquecategories);
  }
  useEffect(()=>{listUniqueCategories();},[]);
  const dispatch=useDispatch();
  const selectedCategory=useSelector((state)=>state.Category.Category);
  
  return (
    <div className='ml-6'>
        <h3 className='text-xl font-semibold'>Find The Best Food Across Your City</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
         <button onClick={()=>dispatch(setCategory('ALL'))} type="button"  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-500 hover:text-white ${selectedCategory=== "ALL" && "bg-red-500 text-white"}`}>ALL</button>
          {
            categories.map((category,index)=>{
              return(<button onClick={()=>dispatch(setCategory(category))} type="button" key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-500 hover:text-white ${selectedCategory=== category && "bg-red-500 text-white"}`}>{category}</button>)
            })
          }</div>
    </div>
  )
}
export default CategoryMenu