import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
        <img src={Logo} alt=''/>
        <span>made with &#10084; and <b>React.js</b>. </span>
    </footer>
  )
}

export default Footer