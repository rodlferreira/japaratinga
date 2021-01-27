import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
// import Login from './Components/Login/LoginContainer';
// import Home from './Components/Home/HomeContainer';
import Building from './Components/Building/BuildingContainer';


ReactDOM.render(
  
  <React.StrictMode>
    
    <BrowserRouter>
    
      <Switch>

        {/*<Route path='/login' exact component={Login} />*/}
        {/*<Route path='/home' component={Home} />*/}
        <Route path='/' component={Building} />


      </Switch>
    
    </BrowserRouter>  

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
