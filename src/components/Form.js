import React, { useState } from 'react'
import './Form.css'
import { Fragment } from 'react'

export default function Form(props) {

    const handleclose1=()=>{

        props.setshowForm(false)
      }

const [title,settitle]=useState('')
const [date,setdate]=useState('')
const [genre,setgenre]=useState('')



const resetForm=()=>{
    setdate('')
    settitle('')

}



const handlesubmit=(event)=>{

    event.preventDefault()

    const obj={name: title,
        id: Math.floor(Math.random()*100),
                date: date,
                genre:genre
                }

  props.addMovie(obj)

  resetForm()
    handleclose1()



}





  return (

    <Fragment>
    <div className='outside'>
      <div className="inside">

        <form onSubmit={handlesubmit}>
            <label>
                <span className='first'>Movie title: </span>
                <input  type="text" value={title} onChange={(event)=>settitle(event.target.value) } />
            </label>
            <br />
            <label>
                <span>Movie date: </span>
                <input type="date" value={date} onChange={(a)=>setdate(a.target.value)} />
            </label>
            <br />
            <label>
                <span>Movie genre: </span>
                <select onChange={(a)=>{setgenre(a.target.value)}}>
                    <option value="action">action</option>
                    <option value="drama">drama</option>
                    <option value="sci-fi">sci-fi</option>
                    <option value="comedy">comedy</option>
                    <option value="horror">horror</option>
                </select>            
            </label>
            <br />
            <button className='btn-submit'>Submit</button>
            <button className='small-close' onClick={()=>{handleclose1()}}>Close</button>
        </form>
        

        
      </div>
    </div>
    </Fragment>

  )
}
