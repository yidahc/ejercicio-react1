import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component  {
    constructor(){
        super();
        this.state = {
            nombre: "",
            descripcion: "",
            costo: null,
            precio: null,
            disponibilidad: 1,
            imagenes: []
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
        let APPURL = 'localhost:3001'
        axios.post(`${APPURL}/new/articulo`,this.state)
            .then(response => console.log(response))
            .catch(err => alert(err))
            .then(this.setState({
                nombre: "",
                descripcion: "",
                costo: null,
                precio: null
              }));
    }

    render(){
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
        <div className="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" value = {this.state.nombre} onChange = {this.handleInput}/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Descripcion</label>
            <textarea className="form-control" id="descripcion" rows="2" value = {this.state.descripcion} onChange = {this.handleInput}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Costo</label>
            <input type="number" className="form-control form-control-sm" id="costo"  value = {this.state.costo} onChange = {this.handleInput}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Precio</label>
            <input type="number" className="form-control form-control-sm" id="precio"  value = {this.state.precio} onChange = {this.handleInput}/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlFile1">Imagenes</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            <small id="imagenesHelp" className="form-text text-muted">Opcional</small>
        </div>
        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Publicar</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )};
}

export default Form;
