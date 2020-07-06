import React, {Component} from 'react'
import {Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
        <Button 
          variant="outlined" 
          color="primary"
          startIcon={<EditIcon />}
          // onClick={handleClickOpen}
          onClick={() => {props.getAlimento(props.comida)}}
        >
          Editar
        </Button>
        </td>
        <td>
        <Button 
          variant="outlined" 
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => {props.handleEliminar(props.comida)}}
        >
          Eliminar
        </Button>
        </td>
      </tr>
    )
}

export default AlimentoItem;