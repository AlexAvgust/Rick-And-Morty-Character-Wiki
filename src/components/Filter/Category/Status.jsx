import React from 'react'
import FilterBtn from '../FilterBtn'

function Status({setStatus}) {
    let status = ['alive','dead','unknown']
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {status.map((items,index) => (<FilterBtn task={setStatus} key={index} name='status' index={index} items = {items}/>))}
      </div>
    </div>
  </div>
  )
}

export default Status