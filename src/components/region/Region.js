import { useState,useEffect } from "react"
import { useAsync } from "../../hooks/useAsync"
// import {Button}from '../../atoms/button'
import {Loader} from '../../atoms/loader'
// import { REGIONS} from '../../utils/constans'
import {RegionName} from '../../api/rest.service'
import { RenderCountries } from "../function"
import { RenderRegions } from "../function"

import './regionName.css'

export const Region=({region='Europe'})=>{
const [currentRegion,setCurrentRegion]=useState(region)
const {execute, status, error, data }=useAsync(RegionName,false)
useEffect(()=>{

    execute(currentRegion)
},[currentRegion,execute] )

// const renderRegions=()=>{
 
//         return REGIONS.map((item)=>{
         
//             return <Button className="btn" key={region}  onClick={()=>{setCurrentRegion(item)}}>{item}</Button>
//         })
  
// }
const renderStatus=()=>{
      return (
          <div>
        {status === 'idle' && <h3 className="text-warning">Please select a region</h3>}
        {status === 'error' && <h3 className="text-danger">{error}</h3>}
        {status === 'pending' && <Loader />}
        {status === 'success' && (<div className="d-flex justify-content-between flex-wrap"><RenderCountries data={data}/></div> )}
       </div>
             )
}



return (
 
    <div className=" row col-12 ">
     <h2 className="d-flex text-muted col-12 row justify-content-center">
       Selected Region:<spam>{currentRegion}</spam> 
     </h2> 
     <div className="d-flex justify-content-center">
      <RenderRegions region={region} setCurrentRegion={setCurrentRegion}/>
    </div > 
    <div className="row col-16 blak">
     {renderStatus()}

    
    </div>
    </div>
)


}