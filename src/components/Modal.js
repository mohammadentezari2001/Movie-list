import React, { Fragment } from 'react'
import './Modal.css';


export default function Modal(props) {


  const handleclose=()=>{

    props.setshowmodal(false)
  }


  return ( 


  
  
  <Fragment>
    <div className='outside'>
      <div className="inside">

        <h1>Awesome Movirs and Animations in our site!!!</h1>
        <p>See this !!! briliant !!! fantastic!!!!</p>
        <button className='btn' onClick={()=>{handleclose()}}>close</button>
      </div>
    </div>
    </Fragment>
  )
}
