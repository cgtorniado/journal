import React from 'react'
import TodoBody from './TodoBody'
import { Route, Routes } from 'react-router-dom'
import JournalBody from './JournalBody'
import Nav from './Nav'

const App = () => {
  return (
    <>
        
        <h1 className='text-center p-5'>A Safe Place</h1>
        <Nav/>
        <Routes>
            <Route path="/" element={<JournalBody/>} />
            <Route path="/todo" element={<TodoBody/>} />
        </Routes>
    </>
  )
}

export default App