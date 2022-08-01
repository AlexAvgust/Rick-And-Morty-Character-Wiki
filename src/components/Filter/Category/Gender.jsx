import React from 'react'
import FilterBtn from '../FilterBtn'

function Gender({setGender}) {
    let genders = ['Male','Female','Genderless','unknown']
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
      {genders.map((items,index) => (<FilterBtn task={setGender} key={index} name='gender' index={index} items = {items}/>))}

       {/* <button className="btn btn-outline-primary">Male</button>
       <button className="btn btn-outline-primary">Female</button>
       <button className="btn btn-outline-primary">Genderless</button>
       <button className="btn btn-outline-primary mt-2">Unknown</button> */}

      </div>
    </div>
  </div>
  )
}

export default Gender