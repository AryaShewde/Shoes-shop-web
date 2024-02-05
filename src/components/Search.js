import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = ({ handleSearchNote, handleCategoryChange, selectedCategory }) => {
  return (
    <>
      <div className='d-flex align-items-center gap-2 bar'>
        <div className='search'>
          <input className='inputser' onChange={(event) => { handleSearchNote(event.target.value) }} type="text" placeholder='Search....' />
          <IoSearchSharp className='binaculer'/>
        </div>
        <select className='dropdown' value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="bata">Bata</option>
        </select>
      </div>
    </>
  )
}

export default Search
