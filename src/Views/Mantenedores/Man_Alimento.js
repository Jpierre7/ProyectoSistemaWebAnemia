import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AlimentoList from "../../Components/AlimentosList"

class Man_Alimento extends Component {
  state = {
    data: [],
    parametros: {

      nombre: '',
      ingredientes: '',
      preparacion: '',
      ruta: 'pruebZZZZZ',
      edad_rango: 1,
      idtipo_anemia_FK: 1,
      tipoalimento: 0,
    },
    nombre: '',
    ingredientes: '',
    preparacion: '',
    ruta: 'pruebZZZZZ',
    edad_rango: 1,
    idtipo_anemia_FK: 1,
    tipoalimento: 0,
    open: false

  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("Parametro", e.target.name);
    console.log("Valores", e.target.value);
    
  }
  handleAgregar = async (e) => {
    // e.preventDefault();
    const response = await fetch('http://tesisanemia.000webhostapp.com/TesisAnemia2/JSonInsertAlimentoPOST.php', {
      method: "POST",
      body: JSON.stringify({
        edad_rango: 1,//this.state.edad_rango,
        idtipo_anemia_FK: 1, //this.state.idtipo_anemia_FK,
        nombre: this.state.nombre,
        ingredientes: this.state.ingredientes,
        preparacion: this.state.preparacion,
        ruta: 'mm',//this.state.ruta
        tipoalimento: this.state.tipoalimento,
      }),
      headers:{
          // 'Accept': 'application/json',
          // 'Content-Type':'application/json'
      },
      
    })
    const data = await response.json();
    console.log("ME",data);
  }
  getFamiliares = async () => {
    const response = await fetch('https://tesisanemia.000webhostapp.com/TesisAnemia2/JSonListAlimento2.php');
    const data = await response.json();
    console.log("dataa", data)
    this.setState({ data })
  }

  componentDidMount() {
    this.getFamiliares();
  }

  render() {
    const { comida: data } = this.state.data
    const { nombre, ingredientes, preparacion, tipoalimento } = this.state

    return (
      <>
        <AlimentoList data={data || []} handleChange={this.handleChange} nombre={nombre} ingredientes={ingredientes} preparacion={preparacion} tipoalimento={tipoalimento} handleAgregar={this.handleAgregar} />
      </>
    )
  }
}

export default Man_Alimento;