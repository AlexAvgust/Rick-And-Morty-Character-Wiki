import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ results, page }) => {
  let display
  // console.log()
  if (results) {
    display = results.map(x => {
      const { id, image, name, status, } = x
      return (<Link to = {`${page}${id}`} style={{
        textDecoration: 'none', 
        color: 'black',
        borderRadius: '10px',
        border: '1px solid lightblue',
        width: '292px'
      }} className='col-lg-4 col-md-6 pt-2 m-3 col-12 d-flex flex-grow-0 flex-column flex-wrap '
        key={id} >
        <img className='img-fluid  rounded' src={image}
          alt={name} />
        <h3 className='display-6 text-center'>{name}</h3>
        <h3 className='fw-bolder text-center'>{status}</h3>
        <h3 className='mt-3 text-center'>{x.location.name}</h3>


      </Link>)

    })
  } else {
    display = 'No characters Found :/'
  }
  return (
    <>{display}</>
  )
}

export default Card