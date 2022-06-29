import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className = 'footer'>
        <h4>{new Date().getFullYear()}</h4>
    </div>
  )
}

export default Footer