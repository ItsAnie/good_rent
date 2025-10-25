import React from 'react'
import Start from './components/Start/Start'
import Search from './components/Search/Search'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div className='app-wrapper'>
      <Start />
      <Search />
      <Footer />
    </div>
  )
}

export default App
