import React from 'react'
import Gender from './Category/Gender'
import Spaces from './Category/Spaces'
import Status from './Category/Status'
const Filter = ({setStatus,setGender,setSpecies}) => {

let clear = () =>{
  setStatus('')
  setGender('')
  setSpecies('')

}
    
  return (
    <div className='col-sm-12'>

      <div className="text-center fs-4 mt-5">Filter</div>
      <div style={{cursor: 'pointer'}} className="text-center mt-3 text-primary"
      onClick={clear}>Clear Filter</div>

      <div className="accordion mt-4" id="accordionExample">
    <Gender setGender={setGender}/>
    <Status setStatus={setStatus}/>
    <Spaces setSpecies={setSpecies}/>
 
  
</div>
    </div>
  )
}

export default Filter