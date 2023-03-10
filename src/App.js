import React from 'react'
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import {
  Routes, Route
} from 'react-router-dom'
import Service from './components/Service'
import { ThemeContext } from './theme-context'



function App() {
  
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (


    <div >
      <header
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <Header />
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }}
        >
          Toggle to {!dark ? 'Dark' : 'Light'} theme
        </button>
        <br/>
        <Routes>
          <Route exact path='/' element={
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </>
          } />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/service' element={<Service />} />
        </Routes>

      </header>

    </div>
  )
}

export default App