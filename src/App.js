import React from 'react'
import Header from './components/Comon/Header'
import Home from './components/Home'
import Userdata from './components/Userdata'
import { Routes, Route } from 'react-router-dom'
import AddUser from './components/AddUser'
import Edituser from './components/Edituser'

const App = () => {
  return (
    <div className='App'>
      <div className='leftPenal bg-primary'>
        <Header />
      </div>
      <div className='rightPenal'>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/userdata' element={ <Userdata /> } />
          <Route path='/adduser' element={ <AddUser /> } />
          <Route path='/edituser/:id' element={ <Edituser /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App