import React, { useState } from 'react'
import './App.css'
import DynamicForm from './components/dynamicForm'
import Input from './components/input'

function App() {
  const [displayOnlyLast, setDisplayOnlyLast] = useState(true)
  const [constantSubmit, setConstantSubmit] = useState(false)
  const toggleDisplayOnlyLast = () => setDisplayOnlyLast(!displayOnlyLast)
  const toggleConstantSubmit = () => setConstantSubmit(!constantSubmit)

  return (
    <div className='app'>
      <header className='app-header'>Sample form</header>
      <div className='options'>
        <Input
          type='checkbox'
          id='displayOnlyLast'
          label='displayOnlyLast property'
          onChange={toggleDisplayOnlyLast}
        />
        <Input
          type='checkbox'
          id='constantSubmit'
          label='constantSubmit property'
          onChange={toggleConstantSubmit}
        />
      </div>
      <DynamicForm
        displayOnlyLast={displayOnlyLast}
        items={[{ id: 'name' }, { id: 'surname' }, { id: 'address' }]}
        onSubmit={console.log}
        setConstantSubmit={setConstantSubmit}
      />
    </div>
  )
}

export default App
