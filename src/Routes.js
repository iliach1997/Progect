import {lazy,Suspense} from 'react'
import { Routes as Router, Route  } from "react-router-dom";
import { Loader } from './atoms';
//import {Home} from './pages/home/'
import {NoMatch} from './pages/NoMatch'
const Home =lazy(()=>import('./pages/home/'))
const ShoppingCart=lazy(()=>import('./pages/shoppingCart'))
const Products=lazy(()=>import('./pages/products'))
 export const Routes=()=>{
   return(
       <>
       <Router>
  <Route path='/Home'index element={<Suspense fallback={<Loader/>}><Home/></Suspense>}/>
<Route path='/Products' element={<Suspense fallback={<Loader/>}> <Products/></Suspense>}/>
<Route path='ShoppingCart' element={<Suspense fallback={<Loader/>}><ShoppingCart/></Suspense>}/>
<Route path='*' element= {<NoMatch/>}/>
</Router>
       
       </>
   )
   
 }