import React, { Component } from 'react';
import Loader from '../../Components/Loader'
import Context from "../../Components/Context";
import './Login.css';
import Imagen from './Image/logoHierroHearth.png';

class Login extends Component{
  static contextType = Context;
  
  state = {
    data:[],
    password: "", //declara variable 
    username: "", //declara variable
    loading:true,
    errorMessage: ""
  }

  //Evento para almacenar valor
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }
  componentDidMount(){  
    const user = localStorage.getItem("user");
    this.setTimeoutId = setTimeout(() => {
      this.setState({loading:false});
    }, 2000);
    if(user) {
      this.context.login(JSON.parse(user));
      this.props.history.push('/dashboard')
    }
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
    const { password, username } = this.state
    this.setState({errorMessage: "", loading:false})
    if(username===""){
      return this.setState({errorMessage: "Debe ingresar un usuario"})
    }
    if(password===""){
      return this.setState({errorMessage: "Debe ingresar un password"})
    }
    this.verifyLogin(password, username)
  }

  verifyLogin = async (password, username) => {
    try {
      this.setState({loading:true})
      const response = await fetch(`https://tesisanemia.000webhostapp.com/TesisAnemia2/JSonLogin.php?username=${username}&password=${password}`);
      const data = await response.json();
      this.setState({loading:false});
      const exist = data.usuario ? true : false;
      console.log("Data", data.usuario);
      console.log("existe", exist);
      if(exist){
        const tipousuario = data.usuario[0].tipousuario;
        if(tipousuario==='A'){
        const { idfamiliar, apellido_materno, apellido_paterno, nombres } = data.usuario[0]
        this.context.login({
          id: idfamiliar,
          apellidoMaterno: apellido_materno,
          apellidoPaterno: apellido_paterno,
          nombres: nombres
        })
        
        this.props.history.push('/dashboard')
        } else{
          console.log("me");
          this.setState({errorMessage:"No es administrador"})
          this.setState({username:"", password:""});
        }
      } else {
        this.setState({errorMessage: "Datos incorrectos"})
      }
    } catch (error) {
      console.log("error")
    }
  }

  // componentWillUnmount() {
  //   clearTimeout(this.setTimeoutId)
  // }

  render(){
    const { password, username, errorMessage, loading } = this.state
    if(loading===true) return <Loader/>
    return (
    <>
    <div className="text-center" onSubmit={this.handleSubmit}>
        
      <form class="form-signin">
       <img class="mb-4" src={Imagen} alt="" width="100" height="72"/>
       <h1 class="h3 mb-3 font-weight-normal" style={{color:"#FA5858"}}>HIERRO HEARTH</h1>
       <input value={username} name="username" onChange={this.handleChange} class="form-control" placeholder="User" required autofocus/>       
       <input type="password" value={password} name="password" onChange={this.handleChange} class="form-control" placeholder="Password" required/>       
       <button class="btn btn-lg btn-danger btn-block" type="submit">Ingresar</button>       
       {errorMessage && <span style={{color:"red"}}>{errorMessage}</span>}
       <p class="mt-5 mb-3 text-muted">&copy; LUCA DEVELOPERS 2020</p>
    </form>
      </div>
    </>
    );
  }
}

export default Login;