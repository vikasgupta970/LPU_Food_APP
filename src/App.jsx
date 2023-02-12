
import Home from './Components/Home'
import About from './Components/About';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <h1>hello</h1>
    </Routes>
    </>
   );
}

export default App;
