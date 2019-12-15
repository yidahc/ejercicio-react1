import React, {Component} from 'react';
import axios from 'axios';

class ProovedorForm extends Component  {
    constructor(){
        super();
        this.state = {
            email: undefined,
            nombre: undefined,
            direccion1: undefined,
            direccion2: undefined,
            telefono: undefined,
            celular: undefined,
            commentario: undefined
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
        let { email, nombre, direccion1, direccion2, telefono, celular, commentario } = this.state;
        axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                email,
                nombre,
                direccion: direccion1.concat(direccion2),
                telefono,
                celular,
                commentario
            })
            .then(response => console.log(response))
            .catch(err => alert(err))
            .then(this.setState({
                email: undefined,
                nombre: undefined,
                direccion1: undefined,
                direccion2: undefined,
                telefono: undefined,
                celular: undefined,
                commentario: undefined
              }));
    }

    render(){
    return (
      <div>
            <form>
        <div className="form-row col-lg-10">
            <div className="form-group col-lg-6">
            <label for="inputName">Nombre</label>
            <input type="text" className="form-control" id="nombre" value = {this.state.nombre} onChange = {this.handleInput}/>
            </div>
            <div className="form-group col-lg-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="email" value = {this.state.email} onChange = {this.handleInput}/>
            </div>
        </div>
        <div className="form-group col-md-10">
            <label for="inputAddress">Direccion</label>
            <input type="text" className="form-control" id="direccion1" placeholder="Calle, Numero, Colonia, Delegacion/Municipio y Ciudad" value = {this.state.direccion1} onChange = {this.handleInput}/>
            <small id="imagenesHelp" className="form-text text-muted">Opcional</small>
        </div>
        <div className="form-group col-md-10">
            <label for="inputAddress2">Direccion Parte 2</label>
            <input type="text" className="form-control" id="direccion2" placeholder="Estado, Pais y Codigo Postal" value = {this.state.direccion2} onChange = {this.handleInput}/>
            <small id="imagenesHelp" className="form-text text-muted">Opcional</small>
        </div>
        <div className="form-row col-md-10">
            <div className="form-group col-md-6">
            <label for="inputCity">Commentario</label>
            <input type="text" className="form-control" id="commentario" value = {this.state.commentario} onChange = {this.handleInput}/>
            <small id="imagenesHelp" className="form-text text-muted">Opcional</small>
            </div>
            <div className="form-group col-md-3">
            <label for="inputZip">Telefono</label>
            <input type="number" className="form-control" id="telefono" value = {this.state.telefono} onChange = {this.handleInput}/>
            </div>
            <div className="form-group col-md-3">
            <label for="inputCity">Celular</label>
            <input type="number" className="form-control" id="celular" value = {this.state.celular} onChange = {this.handleInput}/>
            </div>
        </div>
        <div className="form-group col-md-3">
        <button type="submit" className="btn btn-primary">Registrar Nuevo Proovedor</button>
        </div>
        </form>
      </div>
    )};
}

export default ProovedorForm;
