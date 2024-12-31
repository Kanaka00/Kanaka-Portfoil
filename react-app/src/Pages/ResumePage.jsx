import React from 'react'
import nkdPdf from "../assets/NKD.png"
import Downlode from '../assets/downlode'


const ResumePage = () => {
        

  return (
  
<>
<h1 className='pageTitle'>RESUME  4</h1>
  <div className='resumePage'>
     
      <img src={nkdPdf} alt="NKD Resume" />
      <Downlode/>
      
    </div>

</>
  )
}

export default ResumePage