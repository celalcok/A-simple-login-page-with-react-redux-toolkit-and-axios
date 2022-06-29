import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function Register() {
  return (
    <div>
        <Header/>
        <div className='page register' >
        <h1>Register</h1>
        <div className="form">
            <div className="input-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username"/>
            </div>
            <div className="input-group">
                <label htmlFor="username">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <div className="input-group">
                <label htmlFor="username">Reenter Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <button>Register</button>
        </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Register