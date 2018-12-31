import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Contact from './components/Contact'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App
