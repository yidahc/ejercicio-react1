import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component  {
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        const {id, value} = event.target;
      
        this.setState({
          [id]:value
        }); // name and value are in target
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response => console.log(response))
            .catch(err => alert(err))
            .then(this.setState({
                email: "",
                password: ""
              }));
    }

    render(){
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value = {this.state.email} onChange = {this.handleInput}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password"  value = {this.state.password} onChange = {this.handleInput}/>
        </div>
        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )};
}

export default Form;
