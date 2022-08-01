/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import Search from './components/Search/Search.jsx'
import Card from "./components/Card/Card.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";
import Filters from "./components/Filter/Filter.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from "./Pages/Episodes.jsx";
import Location from "./Pages/Location.jsx";
import CardDetails from "./components/Card/CardDetails.jsx";
function App(){
  return(
    <Router>
      <div className="App">
              <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<CardDetails/>} />
        <Route path="/Episodes" element={<Episodes/>} />
        <Route path="/Episodes/:id" element={<CardDetails/>} />
        <Route path="/Location" element={<Location/>} />
        <Route path="/Location/:id" element={<CardDetails/>} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData,updateFetchedData] = useState([])
  let [search, setSearch] = useState('')
  let [status,setStatus] = useState('')
  let [gender,setGender] = useState('')
  let [species,setSpecies] = useState('')
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
let {info,results} = fetchedData

// results.forEach(el => console.log(el.name))


  useEffect(() => {
    (async function () {
      let data = await fetch(api)
        .then(res => res.json())
        updateFetchedData(data)
        
    })()
  }, [api])

  return (
    <div className="App">

     
      <div className="container">
        <div className="row mt-4">


          <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
          <h1 className='text-center mb-3 display-3 fw-bold'>Character</h1>
          <div className="d-flex">
            <div className="row d-flex m-auto col-xxl-9 justify-content-evenly">
              <Card page='/' results={results}/>
              
            </div>
             <div className="container">
                <div className="row ">
                  
                  <Filters className="" setStatus={setStatus}
                  setGender = {setGender}
                  setSpecies={setSpecies}
                  /></div>
              </div>
          </div>
         
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
