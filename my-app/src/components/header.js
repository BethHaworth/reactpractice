import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img width="80" src={require('../images/React-icon.svg')} /></Link>
      <button type="button"><Link to="/">Home</Link></button>
      <button type="button"><Link to="/Contact">Contact</Link></button>
    </div>
 </div>
)

export default Header
