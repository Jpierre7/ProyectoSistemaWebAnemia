import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

function ModalDetalle(props){
    console.log("dsad", props.alimento.ruta);
    return(
        <Dialog open={props.openDetalle} onClose={props.openOrCloseModalDetalle} 
            aria-labelledby="form-dialog-title"
            fullWidth={true}
            maxWidth = {'sm'} >
      <DialogTitle id="form-dialog-title">
        DETALLE ALIMENTO
      </DialogTitle>
      <DialogContent>
          <div className="card">
              <div className="card-header">
                  <div className="d-flex justify-content-between">
                      <div>
                          Ingredientes
                      </div>
                  </div>
              </div>
              <div className="card-body">
                  {props.alimento.ingredientes}
              </div>
          </div>
          <br/>
          <div className="card">
              <div className="card-header">
                  <div className="d-flex justify-content-between">
                      <div>
                          Preparacion
                      </div>
                  </div>
              </div>
              <div className="card-body">
                  {props.alimento.preparacion}
              </div>
          </div>
          <img src={props.alimento.ruta}/>
          <DialogActions>
            <input type="button" className="btn btn-secondary" onClick={props.openOrCloseModalDetalle} value="Cancelar" />
          </DialogActions>
      </DialogContent>
    </Dialog>
    )
}

export default ModalDetalle;
