import React from 'react';

import Persons from './persons';

import Hello from './Practice/Hello'
import Form from './Practice/Form'
import Parent from './Practice/Parent'
import Ref from './Practice/Ref'
import Rendering from './Practice/Rendering'
import AntiPattern from './Practice/AntiPattern'
import Stylesheet from './Practice/Stylesheet'
import Inline from './Practice/Inline'
import Form1 from './Practice/Form1'
// import Form3 from './Practice/Form3'

import FormCompo from './Practice/FormCompo'



import One from './Practice/One'
import FragmentDemo from './Practice/FragmentDemo';

import ClickComponent from './Practice/ClickComponent';

import HoverComponent from './Practice/HoverComponent';

import Form2 from './Practice/Form2';

import One1 from './Practice/One1';
import Increase from './Practice/Increase';

import NewPractice from './Practice/NewPractice';
import Header from './Practice/Layouts/Header';

import Footer from './Practice/Layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import {BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';

import {Home} from './Practice/Home';
import {About} from './Practice/About';

import {Contact} from './Practice/Contact';

import {NoMatch} from './Practice/NoMatch';

import {Layouts} from './Practice/Layouts';
import {NavigationBar} from './Practice/NavigationBar';
import {Jumbotron} from './Practice/Jumbotron';

import MainForm from './semantic/MainForm';
import ReactRouter from './semantic/ReactRouter';

import { Container } from 'semantic-ui-react';
// 
// import Store from './Practice/Store';
import { Steps } from './Steps/Steps'

import MultiStep from 'react-multistep'
import ApiCall from './Practice/ApiCall';

import UseApp from './HindiReducer/UseApp';
import ClassApp from './HindiReducer/ClassApp';

import CombineReduc from './HindiReducer/CombineReduc';

const user =()=>{

  return (<h1>Welcome to the user page </h1>)

}

const displayName=({match})=>{

return (<h3>Here we are displaying the name {match.params.username}</h3>)
}


export default function App() {
  return (
      <div className="step-container"> 
       <Jumbotron />
       <ReactRouter />
        {/* <Store /> */}

<React.Fragment>
  <NavigationBar />
  <Jumbotron />
  <Layouts>
        <Router>
         <ul>
            <li>
              <NavLink to="/about" exact activeStyle={{"color":"green"}}>About</NavLink>
              </li>
            <li>
              <NavLink to="/user" exact activeStyle={{"color":"green"}}>user</NavLink>
            </li>
            <li>
            <NavLink to="/contact" exact activeStyle={{"color":"green"}}>contact</NavLink>
            </li>
            </ul>

          <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/user" exact strict component={user} />
            <Route path="/displayName/:username" exact strict component={displayName} />


            <Route path="/services" render={()=>{return (<h1>Welcome to the services page</h1>);}} />

            <Route  component={NoMatch} />
          </Switch>

        </Router>
  </Layouts>
        </React.Fragment> 
        {/* <Form3 /> */}
        {/* <ApiCall /> */}

        {/* <UseApp /> */}
        <ClassApp />
        <br /><br />
        <CombineReduc />
        <div className="step-form">
      <MultiStep steps={Steps} />
    </div>


        { <Container textAlign='center'>
        <MainForm />
      </Container>  }
      </div>
     
  );
}