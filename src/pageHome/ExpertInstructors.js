import React from 'react'
import Cardinstructor from './Cardinstructor'
import Typecourse from './Typecourse'

const ExpertInstructors = () => {
  return (
    <div className='body'>
        <Typecourse name="INSTRUCTORS"type="Expert Instructors"/>
        <div className='displayCard'style={{background:"rgba(253, 220, 170, 0.1)",borderRadius:"0px"}}>
        <Cardinstructor/>
        <Cardinstructor/>
        <Cardinstructor/>
        </div>
    </div>
  )
}

export default ExpertInstructors