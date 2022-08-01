import React from 'react'

function Pagination({setPageNumber}) {
    let next = () => {
        setPageNumber(x =>{
            if(x>41){
               return x = 42
            } else{
               return x + 1
            }
        })
    }

    let prev = () => {

        setPageNumber(x =>{
            if(x<2){
               return x = 1
            }else{
               return x - 1
                
            }
        } 
        )

    }
  return (
    <div className='container'>
        <div className=" d-flex justify-content-center gap-5 mb-4">

        <button onClick={prev} className="btn btn-primary">Prev</button>
        <button onClick={next} className="btn btn-primary">Next</button>
        </div>
    </div>
  )
}

export default Pagination