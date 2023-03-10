import React from 'react'
import {Link
  } from 'react-router-dom'

export default function Header() {

  return (
    <div>
      
        <div>Geekster</div>
        <Link to='/'>Home</Link> <br/>
        <Link to='/contact'>Contact</Link><br/>
        <Link to='/service'>Service</Link><br/>
       
    </div>
  )
}
