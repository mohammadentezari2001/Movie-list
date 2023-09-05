import './App.css';
import Modal from './components/Modal';
import Form from './components/Form';
import {useState } from 'react';

function App() {
  // const handleopen=()=>{

  //   setshowModal(true)
  // }
  const handleopen1=()=>{

    setshowForm(true)
  }

  const handldelete=(a)=>{
  setevents(events.filter((b)=>{
    return a!==b.id
  }))    
  }

  const addMovie=(obj)=>{

    setevents((prevEvents)=>{
      return [...prevEvents,obj]
    })


  }




  const [showModal,setshowModal]=useState(true)
  const [showForm,setshowForm]=useState(false)
  const [events,setevents]=useState([])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>list of best Movies</h1>
        {events.map((eventt,index) => (
          <div className="movie-card">
          <div className='movie-details' key={eventt.id}>
            <h2 className='movie-title'>{index+1}-{eventt.name}</h2>
            <p className='release-date'>released date: {eventt.date}</p>
            <p className='genre release-date'>genre: {eventt.genre}</p>

            <button className='btn-delete' onClick={()=>{handldelete(eventt.id)}} >delete</button>
          </div>
          </div>
        ))}
        <br />
        {/* <button className='btn' onClick={()=>{handleopen()}}>Show Modal</button> */}
        <button className='btn' onClick={()=>{handleopen1()}}>Add New Movie</button>

      </header>
      {showModal && <Modal showmodal={showModal} setshowmodal={setshowModal} />}
      {showForm && <Form showForm={showForm} setshowForm={setshowForm} addMovie={addMovie} />}

    </div>
  );
}

export default App;
