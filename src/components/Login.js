import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../images/logo192.png'
import './Login.css'
import {auth} from '../firebase'


function Login() {
  const history = useHistory() ;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message))
    }

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");

      })
      .catch((e) => alert(e.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src={logo}
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
          <button onClick={login} type="submit" className="login_signInButton">Sign in</button>
        </form>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec pharetra ultrices sapien, eu aliquam ante finibus vel.
          Mauris euismod nisi vitae tortor laoreet, sit amet aliquam 
          ipsum ultrices. 
        </p>
        <button onClick={register} className="login_registerButton"> Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
