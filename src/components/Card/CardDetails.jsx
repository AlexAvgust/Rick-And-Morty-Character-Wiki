import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    let {id} = useParams()
    let [fetchedData, updateFetchedData] = useState([])

    let{name,image,location,origin,gender,species,status,type} = fetchedData

    let api = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(() => {
    (async function () {
      let data = await fetch(api)
        .then(res => res.json())
        updateFetchedData(data)
        
    })()
  }, [api])

  return (
    <div className='container d-flex justify-content-center mt-2'>
        <div className='d-flex flex-column gap-3 text-center'>
            <h1>{name}</h1>
            <img className='img-fluid' src={image} alt={name} />
           
            <div style={{backgroundColor : status? 'green' : 'red',
                borderRadius: '8px',
                height: '40px',
                color: '#fff'}} className="statusOfCharacter d-flex justify-content-center fs-4 items-center">{status}</div>
           <div className='content text-start'>
             <h3 className='fs-4'><span className="fw-bold"> Species :</span> {species}</h3>
            <h3 className='fs-4'><span className="fw-bold"> Gender :</span> {gender}</h3>
             <h3 className='fs-4'><span className="fw-bold"> Location :</span> {location?.name}</h3>
            <h3 className='fs-4'><span className="fw-bold"> Origin :</span> {origin?.name}</h3> 
            <h3 className='fs-4'><span className="fw-bold"> Type :</span> {type?.name === ""? type : 'unknown'}</h3> 

           </div>
       
        </div>
    </div>
  )
}

export default CardDetails