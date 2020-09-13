import React, {useEffect} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import {useStateValue} from './StateProvider'
import { auth } from './firebase'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Payment from './components/Payment'

const promise = loadStripe('pk_test_51HQvtyHTNB8Sd8SyCkMRnQWUY9bYe29UWDXCEKoF6lmUBb8EhOSiBjiKGkJ7tspKbMJ8oxVBw83Se9mx9sA0pNIJ00qH8Xqr9M')

function App() {

  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return() => {
      unsubscribe();
    }
  }, []);

  console.log('USER: ', user)

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
