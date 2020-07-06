import React, {Component} from 'react'
import AlimentoItem from "./AlimentoItem"
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem  } from '@material-ui/core'

function AlimentoList(props){
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const getAlimento = (alimento) =>{
      console.log('Alimento:', alimento);
      setOpen(true);
      
    }
    return(
      <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      
        <h1>Lista de Alimentos</h1>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Nombre de comida</th>
              <th>Ingredientes</th>
              <th>Preparacion</th>
              <th>Tipo Alimento</th>
              <th>Imagen plato</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(f => <AlimentoItem key={f.idcomida} comida={f} getAlimento={getAlimento} />)}
          </tbody> 
        </table>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Agregar
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Alimentos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Crear Alimento               
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre de comida"
            name="nombre"
            value={props.nombre}
            onChange={props.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="ingredientes"
            label="Ingredientes"
            name="ingredientes"
            value={props.ingredientes}
            onChange={props.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="preparacion"
            label="Preparación"
            name="preparacion"
            value={props.preparacion}
            onChange={props.handleChange}
            fullWidth
          />
          <FormControl>
            <InputLabel htmlFor="tipoalimento">Tipo de Comida</InputLabel>
            <Select 
              value={props.tipoalimento}
              onChange={props.handleChange}
              inputProps={{
                  name:"tipoalimento",
                  id:"tipoalimento"
              }}
              style={{width:"250px"}}
            >
                <MenuItem value={1}>Desayuno</MenuItem>
                <MenuItem value={2}>Almuerzo</MenuItem>
                <MenuItem value={3}>Cena</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleAgregar} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
      </>

    )
}

export default AlimentoList;