import React, { Component } from 'react'
import { HashRouter, Route} from 'react-router-dom'
import Index from './components/Index'
import Film from './components/Film'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="root">
          <div className="title">
            <h1>Star Wars Movies</h1>
          </div>
          <Route exact path="/" component={Index}></Route>
          <Route path="/film/:id" component={Film}></Route>
        </div>
      </HashRouter>
    );
  }
}

export default App;
