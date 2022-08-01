import React,{useState,useEffect} from 'react'
import Card from '../components/Card/Card'
import InputGroup from '../components/Filter/Category/InputGroup'
const Episodes = () => {

  let[id,setId] = useState(1)
  let [info,setInfo] = useState([])
  let [results,setResults] = useState([])
  let{air_date,name} = info
  let api = `https://rickandmortyapi.com/api/episode/${id}`


  useEffect(() => {
    (async function(){
      let data = await fetch(api)
      .then(res => res.json())
      setInfo(data)


      let a = await Promise.all(
        data.characters.map(async (x) => {
          const res = await fetch(x)
          return await res.json()
        }),
        
      )
      setResults(a)
    })()
  },[api])
  return (
    <div className='container'>
      <div className="row mt-4">
        <h1 className="text-center mb-4">Episode : 
        <span className="text-primary"> {name===''?'Unknown': name}</span></h1>
        <h5 className="text-center">
          Air Date {air_date===''?'Unknown': air_date}
        </h5>
      </div>
      <div className="row mt-5">
        <div className="col-3">
          <div className="text-center fs-3">

          Pick Episodes:
          <InputGroup setId={setId} name='Episode' total={51}/>
          
          </div>
        </div>
        <div className="col-9">
          <div className="row">
          <Card page='/Episodes/' results={results}/></div>

          </div>
      </div>

    </div>
  )
}

export default Episodes