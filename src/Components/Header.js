import React from 'react'
import "./Header.css"
import web from "./hicon.jpg"

const Header = () => {
  return (
    <div className='header'>
    {/* <img src={web} className='hicon'/> */}
    <span onClick={()=>window.scroll(0,0)} >Watch Anime </span>
    </div>
  )
}

export default Header;