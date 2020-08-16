import React, {Component} from 'react'
import {Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import DoneIcon from '@material-ui/icons/Done';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import './Styles/buttons.css';

function AlimentoItem(props){
  const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    //const {comida} = this.props
    let descripcion=""//comida.tipoalimento == 1 ? "desayuno" : comida.tipoalimento == 2 ? "almuerzo" : "cena"
    let estado=""
    if(props.comida.tipoalimento==1){
        descripcion="Desayuno";
    }else if(props.comida.tipoalimento==2){
        descripcion="Almuerzo";
    }else{
        descripcion="Cena";
    }
    if(props.comida.inactivo==0){
      estado="ACTIVO";
    }else{
      estado="INACTIVO";
    }
    const estad=props.comida.inactivo
    return(
   
      <tr className={   estad == 1 ?  "p-3 mb-2 bg-danger text-white": ""}>
        <td>{props.comida.nombre}</td>
        <td>{props.comida.ingredientes}</td>
        <td>{props.comida.preparacion}</td>
        <td>{descripcion}</td>
        <td><img src={props.comida.ruta} width="100px" height="110px"/></td>
        <td>{estado}</td>
        <td>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
          >
            <Button 
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              // onClick={handleClickOpen}
              onClick={() => {props.getAlimento(props.comida)}}>
              Editar
            </Button>
            { estad==1 ?
            <Button 
              variant="contained"
              color="disabled"
              startIcon={<DoneIcon />}
              onClick={() => {props.handleEliminar(props.comida)}}>
              Activar
            </Button>   
            :
            <Button 
            variant="contained"
            color="secondary"
            startIcon={<BlockIcon />}
            onClick={() => {props.handleEliminar(props.comida)}}>
            Desactivar
          </Button>
            }
          </ButtonGroup>
        </td>
      </tr>
    )
}

export default AlimentoItem;