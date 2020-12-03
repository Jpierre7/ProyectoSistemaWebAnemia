import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FamiliaresList from "../../Components/FamiliaresList"
import ModalFamiliare from "../../Components/ModalFamiliare"
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
    isEdit:false,
    dataHijo: []
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

getAlimento = (familiar) => {
    console.log('Alimento:', familiar);
    this.openOrCloseModal();

    this.setState({
        familiar: {
            ...this.state.familiar,
            idfamiliar: familiar.idfamiliar,
            nombres: familiar.nombres,
            apellido_paterno: familiar.apellido_paterno,
            apellido_materno: familiar.apellido_materno,
            dni: familiar.dni,
            sexo: familiar.sexo
        },
        isEdit: true
        
    })
    this.getHijos(familiar)
}
  getFamiliares = async () =>{
    const response = await fetch('https://tesisanemia.000webhostapp.com/TesisAnemia2/JSonListFamiliar.php');
    const data = await response.json();
    console.log("dataa", data)
    this.setState({data})
  }

  getHijos = async (familiar) =>{
    
    console.log("fAMILIAR", familiar)
    const response = await fetch('https://tesisanemia.000webhostapp.com/TesisAnemia2/JSonListHijo.php?idfamiliar_FK='+familiar.idfamiliar);
    const dataHijo = await response.json();
    console.log("dadvgfdgfdgftaa", dataHijo)
    this.setState({dataHijo})
  }

  componentDidMount(){
    this.getFamiliares();
  }

  render(){
    const {familiar: data} = this.state.data
    const {hijo: dataHijo} = this.state.dataHijo
    
    return(
      <>
        <FamiliaresList data={data || []} 
        listFamiliar={this.getAlimento}
        abrirModal={this.openOrCloseModal}/>
        <ModalFamiliare 
              dataHijo={dataHijo || []}
              open={this.state.openModal}
              openOrCloseModal={this.CloseModal}
              familiar={this.state.familiar}
        />
      </>
    )
  }
}

export default Man_Familiar;