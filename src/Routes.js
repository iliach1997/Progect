import {lazy,Suspense} from 'react'
import { Routes as Router, Route  } from "react-router-dom";
import { Loader } from './atoms';

import {NoMatch} from './pages/NoMatch'
const Home =lazy(()=>import('./pages/home/'))
const Georgia=lazy(()=>import('./pages/georgia/'))

 export const Routes=()=>{
   return(
       <>
<Router>
  <Route path='/Home'index element={<Suspense fallback={<Loader/>}><Home/></Suspense>}/>
<Route path='/Georgia' element={<Suspense fallback={<Loader/>}> <Georgia/></Suspense>}/>

<Route path='*' element= {<NoMatch/>}/>
</Router>
       
       </>
   )
   
 }