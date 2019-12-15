import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Card from './Components/card';
import Navbar from './Components/navbar';
import Form from './Components/article';
import ProovedorForm from './Components/proovedor';
import axios from 'axios';
import Home from './Pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      albums: [],
      message: ''
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users/1/albums')
    .then(albums => {
      console.log(albums)
      this.setState({
        albums: albums.data,
        message: 'listo!'
      })
    })
  }

  render(){  
  return (
    <div>
     <div>
       <div>
         <Navbar />
         <BrowserRouter >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/articulo/nuevo">
              <Form />
            </Route>
            <Route exact path="/proovedor/nuevo">
              <ProovedorForm />
            </Route>
          </Switch>
         </BrowserRouter>      
      </div>
     </div>
    </div>
  )};
}

export default App;


/*
 { this.state.albums.length > 0 ?
          this.state.albums.map(album=>
          <Card  title = {album.title} 
                 userId = {album.userId} />)
       : <h3>cargando</h3>
      }
*/