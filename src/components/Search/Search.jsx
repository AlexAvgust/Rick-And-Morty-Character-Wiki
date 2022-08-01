import React from 'react'

const Search = ({setSearch,setPageNumber}) => {
// const [inputText,setInputText] = useState('')
//   let newSearchedArr = results.filter(el => el.name.toLowerCase().indexOf(inputText.toLowerCase()) > -1)
//   console.log(newSearchedArr)

  // console.log(inputText)
  return (
    <div className='input-group mb-3'>
        <input placeholder='Search for Characters' onChange={(e) => {setSearch(e.target.value);setPageNumber(1)}} type="text" className='form-control'/>
        
    
    </div>
  )
}

export default Search