import React from 'react'

function ModalFamiliares(props) {
    return (
      <Dialog open={props.open} onClose={props.openOrCloseModal} 
              aria-labelledby="form-dialog-title"
              fullWidth={true}
              maxWidth = {'sm'} >
        <DialogTitle id="form-dialog-title">
          {props.isEdit ? 'EDITAR ALIMENTO' : 'NUEVO ALIMENTO'}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={props.handleSubmit}>
            <input type="text" placeholder="Nombre De Comida" className="form-control" name="nombre" value={props.alimento.nombre} onChange={props.handleChange} required />
            <br/>
            <textarea placeholder="Ingredientes" className="form-control" name="ingredientes" value={props.alimento.ingredientes} onChange={props.handleChange} rows="8" required />
            <br/>
            <textarea placeholder="Preparacion" className="form-control" name="preparacion" value={props.alimento.preparacion} onChange={props.handleChange} rows="8" required />
            <br/>
            <select className="form-control" value={props.alimento.edad_rango} onChange={props.handleChange} name="edad_rango" required>
                <option value=''>-----SELECCIONE-----</option>
                {props.edadrango.map((item, key) => (<option key={key} value={item.idrango_edad}>{item.descripcion}</option>))}
              </select>
            <br/>
            <input type="file" className="form-control" placeholder="Agregue Imagen" name="ruta" value={props.imgruta} onChange={props.handleChangeImage}/>
            <br/>
            <select className="form-control" value={props.alimento.tipoalimento} onChange={props.handleChange} name="tipoalimento" required>
              <option value=''>-----SELECCIONE-----</option>
              <option value={1}>Desayuno</option>
              <option value={2}>Almuerzo</option>
              <option value={3}>Cena</option>
            </select>
            <br/>
              <select className="form-control" value={props.alimento.idtipo_anemia_FK} onChange={props.handleChange} name="idtipo_anemia_FK" required>
                <option value=''>-----SELECCIONE-----</option>
                {props.typeAnemia.map((item, key) => (<option key={key} value={item.idtipo_anemia}>{item.descripcion}</option>))}
              </select>
            <DialogActions>
              <input type="button" className="btn btn-secondary" onClick={props.openOrCloseModal} value="Cancelar" />
              <input type="submit" className="btn btn-primary" value={props.isEdit ? 'Editar' : 'Guardar'} />
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default ModalFamiliares;
  