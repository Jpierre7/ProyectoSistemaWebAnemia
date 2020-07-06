import React, {Component} from 'react'

class FamiliarItem extends Component{
  
  render(){
    const {familiar} = this.props
    return(
      <tr>
        <td>{familiar.nombres}</td>
        <td>{familiar.apellido_paterno}</td>
        <td>{familiar.apellido_materno}</td>
        <td>{familiar.dni}</td>
      </tr>
    )
  }
}

export default FamiliarItem;