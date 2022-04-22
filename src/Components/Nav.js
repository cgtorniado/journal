import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <div className="text-center">
            <nav>
            <Link to="/" className='btn btn-light shadow-sm'>Journal</Link>
            <Link to="/todo" className='btn btn-light shadow-sm'>To Do List</Link>
            </nav>
        </div>
    </>
  )
}

export default Nav