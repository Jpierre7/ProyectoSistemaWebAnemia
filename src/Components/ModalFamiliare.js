import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem,Divider } from '@material-ui/core'


function ModalFamiliares(props) {
  console.log("sexo", props.familiar.sexo);
    return (
      <Dialog open={props.open} onClose={props.openOrCloseModal} 
              aria-labelledby="form-dialog-title"
              fullWidth={true}
              maxWidth = {'lg'} >
        <DialogTitle id="form-dialog-title">
          {props.isEdit ? 'EDITAR ALIMENTO' : 'NUEVO ALIMENTO'}
        </DialogTitle>
        <DialogContent>
          <form>
            <input type="text" name="nombres" className="form-control" value={props.familiar.nombres}/>
            <br/>
            <input type="text" name="apellido_paterno" className="form-control" value={props.familiar.apellido_paterno}/>
            <br/>
            <input type="text" name="apellido_materno" className="form-control" value={props.familiar.apellido_materno}/>
            <br/>
            <input type="text" name="dni" className="form-control" value={props.familiar.dni}/>
            <label className="radio-inline"><input type="radio" name="sexo" value={props.familiar.sexo} checked={props.familiar.sexo=="M"}/>Masculino</label>
            <label className="radio-inline" style={{margin:"20px"}}><input type="radio" name="sexo" value={props.familiar.sexo} checked={props.familiar.sexo=="F"}/>Femenino</label>
            <Divider/>
            <br/>
            <label class="checkbox-inline"><input type="checkbox" value="" checked/>Desea editar algún hijo?</label>
              <table className="table hidden">
              <tr>
                  <th>Name</th>
                  <th>Apellido Paterno</th>
                  <th>Apellido Materno</th>
                  <th>Dni</th>
                  <th>Sexo</th>
                  <th>Edad</th>
              </tr>
            {props.dataHijo.map((hijo)=>
            <tr>
                  <td>{hijo.nombres}</td>
                  <td>{hijo.apellido_paterno}</td>
                  <td>{hijo.apellido_materno}</td>
                  <td>{hijo.dni}</td>
                  <td>{hijo.sexo}</td>
                  <td>{hijo.edad}</td>
              </tr>
              
              
              )}
              </table>
            <DialogActions>
              <input type="button" className="btn btn-secondary"  value="Cancelar" />
              <input type="submit" className="btn btn-primary"  />
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default ModalFamiliares;
  