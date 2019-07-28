import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import Tech from './Tech/Tech';
import TechId from './Tech/TechId';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <NavBar />
            <Switch>
                <Route exact path='/tech' component={Tech} />
                <Route       path='/:id' component={TechId} />
              
            </Switch>
            

          </div>

        </div>
      </BrowserRouter>
    )
  }
}

export default App
