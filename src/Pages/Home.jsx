import react from 'react';
import Navbar from '../Components/Navbar';
import CategoryMenu from '../Components/CategoryMenu';
import FoodItem from '../Components/FoodItem';
import Cart from '../Components/Cart';
const Home=()=>{
  return (
    <> <Navbar/>
    <CategoryMenu/>
    <FoodItem/>
    <Cart/>
    </>
  )
}
export default Home