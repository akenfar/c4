import React, { useState } from 'react'
import './style.css'
import useFetch from './useFetch'
import CardFavorit from '../srcFavorit/cardFavoris';
import Pagination from '../pagination/pagination';




function MyCours() {
  
  //pagination
  const numberOfCoursesPerPage = 4;
  const [currentPage, setCurrentPage] = useState();

  const { loading, data, error } = useFetch("http://localhost:8000/cours?_page=" + currentPage + '&_limit=' + numberOfCoursesPerPage)


  if (loading) return <h1>...loading</h1>
  if (error) return <h1> error</h1>
  return (
    <div className='favoritPage'>
      {data && data.map(data => (
        <CardFavorit  key={data.id} data={data}/> 
    ))}
      <Pagination  nbCoursPerPage={numberOfCoursesPerPage} 
      url={'http://localhost:8000/cours'} 
      setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default MyCours