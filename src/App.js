import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Card from './Components/card';
//import Navbar from './Components/navbar';
//import Form from './Components/form';
import axios from 'axios';

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
      this.setState({
        albums: albums,
        message: 'listo!'
      })
    })
  }

  render(){  
  return (
    <div>
     <h2>
       { this.state.message }
     </h2>
    </div>
  )};
}

export default App;
