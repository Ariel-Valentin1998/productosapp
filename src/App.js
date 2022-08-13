import './productDetail.css';
import './products.css';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {

   return (
    <>
    
        <Routes>
        <Route exact path="/" element={<Products />}/>
        <Route exact path="/productDetail/:id" element={<ProductDetail />}/>
        </Routes>
        </>
   );
  }
 

export default App