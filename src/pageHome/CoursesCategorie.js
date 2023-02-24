import React from 'react'
import img0 from'./image/img.png'
import './css/home.css'
import Typecourse from './Typecourse'


const CoursesCategorie = () => {
  return (
    <div style={{background:"rgba(253, 220, 170, 0.1)",borderRadius:"0px"}}>
        
        
        <Typecourse name="CATEGORIES"type="Courses Categories"/>
    <table>
        <tr>
        <td rowSpan={2} ><img className='imgcours1 ' src={img0}alt='no'/></td>
        <td colSpan={2}>
        <td>
        <img className='imgcours2' src={img0}alt='no'/>
        </td>
        <td>
        <img className='imgcours2' src={img0}alt='no'/>
        </td>
        </td>
        
        </tr>
        <tr>
        <td colSpan={2}>
        <td>
        <img className='imgcours2' src={img0}alt='no'/>
        </td>
        <td>
        <img className='imgcours2' src={img0}alt='no'/>
        </td>
        </td>
        </tr>
    </table>


    </div>
    
  )
}

export default CoursesCategorie