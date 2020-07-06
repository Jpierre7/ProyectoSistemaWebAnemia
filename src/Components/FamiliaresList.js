import React, {Component} from 'react'
import FamiliarItem from "./FamiliarItem"

class FamiliaresList extends Component{
  
  render(){
    const {data} = this.props
    console.log(data)
    return(
      <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                
        <h1>Lista de Familiares</h1>
                </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Dni</th>
            </tr>
          </thead>
          <tbody>
            {data.map(f => <FamiliarItem key={f.idfamiliar} familiar={f} />)}
          </tbody> 
        </table>
      </>

    )
  }
}

export default FamiliaresList;