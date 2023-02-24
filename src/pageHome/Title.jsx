import React from 'react'
import '../Style/Title.css'
function Title({first ,secend}) {
  return (
    <>
    <div className='categorie-combine'>
        <div className='lines'>
            <div className='line1'></div>
            <div className='line2'></div>
        </div>
        <div className='categorie'>{first}</div>
        <div className='lines'>
            <div className='line3'></div>
            <div className='line4'></div>
        </div>
    </div>
    <div className='Courscategorie'> {secend}</div>

    </>
  )
}

export default Title