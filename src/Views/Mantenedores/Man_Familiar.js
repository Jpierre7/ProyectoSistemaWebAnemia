import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FamiliaresList from "../../Components/FamiliaresList"

class Man_Familiar extends Component{
  state = {
    data: []
  }
  getFamiliares = async () =>{
    const response = await fetch('https://tesisanemia.000webhostapp.com/TesisAnemia2/JSonListFamiliar.php');
    const data = await response.json();
    console.log("dataa", data)
    this.setState({data})
  }

  componentDidMount(){
    this.getFamiliares();
  }

  render(){
    const {familiar: data} = this.state.data
    
    return(
      <>
      <FamiliaresList data={data || []} />
      </>
    )
  }
}

export default Man_Familiar;