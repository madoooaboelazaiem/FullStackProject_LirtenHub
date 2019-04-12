import React from 'react';
import App from './App'
import SignIn from './components/layout/SignIn'
import Form from './components/layout/Form'
import Header from './components/layout/HeaderHome'
import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom'
//gowaha sign in w de hat7awelny 3ala app.js
// sign up w de hat7awelny 3ala form

class Home extends React.Component {
  render() {
    return (
      
      <div>
        <Header/>

      <Router>
      <Switch>
          
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/SignUp" component={Form}/>
          </Switch>

      </Router>
      </div>

    )}
}

export default Home;
