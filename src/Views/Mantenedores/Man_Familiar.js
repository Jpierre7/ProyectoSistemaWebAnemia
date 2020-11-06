import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FamiliaresList from "../../Components/FamiliaresList"

class Man_Familiar extends Component{
  state = {
    data: [],
    familiar:{
      idfamiliar:0,
      nombres:'',
      apellido_paterno:'',
      apellido_materno:'',
      dni:'',
      sexo:'',
      password:'',

    },
    openModal:false,
    isEdit:false
  }
  openAlertModalEliminar = () => {
    this.setState({
        openModal: !this.state.openModal
    })
}

CloseModal = () => {
    this.setState({
        openModal: !this.state.openModal
    })
}

openOrCloseModal = () => {
    this.setState({
      familiar:{
        idfamiliar:0,
        nombres:'',
        apellido_paterno:'',
        apellido_materno:'',
        dni:'',
        sexo:'',
        password:'',
  
      },
        openModal: !this.state.openModal,
        isEdit: false,
    })
}

getAlimento = (alimento) => {
    console.log('Alimento:', alimento);
    this.openOrCloseModal();

    this.setState({
        familiar: {
            ...this.state.familiar,
            idfamiliar: alimento.idfamiliar,
            nombres: alimento.nombres,
            apellido_paterno: alimento.apellido_paterno,
            apellido_materno: alimento.apellido_materno,
            dni: alimento.dni,
            idtipo_anemia_FK: alimento.idtipo_anemia_FK,
            tipoalimento: alimento.tipoalimento,
            inactivo: alimento.inactivo
        },
        isEdit: true
        
    })
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