import React from 'react'
import Header from "./component/Header";
import Productlisting from "./component/Productlisting";
import Productdetail from "./component/Productdetail";
import Cart from './component/Cart';
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App=()=>{
    return(<div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Productlisting/>} />
            <Route path="/productdetail/:productid" element={<Productdetail/>} />
            <Route path='/cartitem'  element={<Cart />}/>
        </Routes>
        </BrowserRouter>

    </div>)
}
export default App;