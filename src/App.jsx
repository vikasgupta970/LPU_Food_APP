
import Home from './Components/Home'
import About from './Components/About';
import { Route,Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react'
import food from './Components/Lotte-react/food.json';

const App=()=>{
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },1500)
  },[])
  return (
    loading    ?<Lottie animationData={food} loop={true} className="h-96 mt-32"></Lottie>:
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
<<<<<<< HEAD
      
    </Routes>
    </>
=======
    </Routes> 
>>>>>>> 46fcd491b0660c9fe5a00f9e516652e3ede37480
   );
}

export default App;
