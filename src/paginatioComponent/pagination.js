import React, { useState, useEffect, useReducer } from 'react';
import Pagination from 'reactjs-hooks-pagination';
import axios from 'axios';
import './style/pagination.css'


const numberOfCoursesPerPage = 5;

const initialState = {
  cours: {},
  loading: true,
  error: ''
}

const Reducer = (state, action) => {
  switch (action.type) {
    case 'OnSuccess':
      return {
        loading: false,
        cours: action.payload,
        error: ''
      }
    case 'OnFailure':
      return {
        loading: false,
        cours: {},
        error: 'error'
      }

    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [totalRecords, setTotalRecords] = useState();
  const [currentPage, setCurrentPage] = useState(1);

// Know the number of courses
  useEffect(() => {
    axios.get('http://localhost:3000/cours')
      .then(response => {
        setTotalRecords(response.data.length)
      }).catch( e => {
        console.log(e+"eee")
      })

  }, []);


  useEffect(() => {
    axios.get('http://localhost:3000/cours?_page=' + currentPage + '&_limit=' + numberOfCoursesPerPage)
      .then(response => {
        dispatch({ type: 'OnSuccess', payload: response.data })
      })
      .catch( _ => {
        dispatch({ type: 'OnFailure' })
        
      })

  }, [currentPage]);
  const { loading, cours, error } = state;
  // window.localStorage.color='red';
  // console.log(window.localStorage)
 
  

  return (
    <div className="container  mb-5">

      {loading ? (<div className="loader"></div>) : (

        error == '' && cours.map(data => (
          <div key={data.id} className="card" >
            <img className="card-img-top" src={data.img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{data.id} {data.title}</h5>
              <p className="card-text">prix: {data.price}</p>
            </div>
          </div>
        )))}


      
        <Pagination className="secondary"
          totalRecords={totalRecords}
          pageLimit={numberOfCoursesPerPage}
          pageRangeDisplayed={1}
          onChangePage={setCurrentPage}
        />
    </div>
  );
}

export default App;