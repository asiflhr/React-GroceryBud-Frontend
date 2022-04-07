import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      // display alert
      showAlert(true, 'Please enter a name', 'danger')
    }else if(name && isEditing){
      // deal with edit
      showAlert(true, 'Item updated', 'success')
    }else{
      // show alert
    }

    const newItem = {id: new Date().getTime().toString(),
    title: name};
    setName('')
    setList([...list, newItem])
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type})
  }

  return (
    <section className='section-center'>
      <form  className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input 
            type='text'
            className='grocery'
            placeholder='enter a grocery item'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'update' : 'add'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items = {list}/>
          <button className='clear-btn' onClick={''}>clear items</button>
        </div>
      )}
    </section>
  )
}

export default App
