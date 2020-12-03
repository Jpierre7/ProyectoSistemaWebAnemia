import React from 'react'
import {Button} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DataTable from 'react-data-table-component'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BlockIcon from '@material-ui/icons/Block';
import DoneIcon from '@material-ui/icons/Done';

const data=[
    {
        //nombre:props.comida.nombre
    }
];
function EjemploLista(props){
    console.log(props.data.idcomida);
    const columnasTable=[
        {
            name:'Nombre',
            selector: 'nombres',
            sortable: true ,
            // maxWidth:'200px',
            wrap: true,
        },
        {
            name:'Apellido Paterno',
            selector: 'apellido_paterno',
            sortable: true ,
            // maxWidth:'200px',
            wrap: true,
        },

        {
            name:'Apellido Matern',
            selector: 'apellido_materno',
            sortable: true ,
            // maxWidth:'200px',
            wrap: true,
        },
        {
          name:'DNI',
          selector: 'dni',
          sortable: true ,
          // maxWidth:'200px',
          wrap: true,
        },
        {
          name:'Sexo',
          selector: 'sexo',
          sortable: true ,
          // maxWidth:'200px',
          wrap: true,
        },
        {
            cell: row =><IconButton 
            class="btn btn-primary"
            // onClick={handleClickOpen}
            onClick={()=>{props.listFamiliar(row)}}>
            <EditIcon />
            </IconButton>
        }
        // {
        //     cell:()=><button className="btn btn-danger"> INACTIVO</button>
        // }
    ]
    const paginacionUpdate={
        
    }
    console.log("Datos:", props.data);
    return(
        <>
        {/* <Button>Agregar</Button> */}
        {/* <Button>Exportar</Button> */}
        <div className="card">
            <div className="card-header">
                <div className="d-flex justify-content-between">
                    <div>
                        DAVILA CRACK!
            </div>
                    <div>
                        <Button onClick={() => { props.abrirModal() }} variant="contained" color="secondary">Agregar</Button>
                    </div>
                </div>
            </div>
            <div className="card-body">
            <DataTable
            noHeader={true}
            data={props.data}
            // subHeaderWrap
            // responsive
            onRowDoubleClicked={props.getAlimento}
            paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
            // width="20%"
            // data={props.data.map(f => <AlimentoItem key={f.idcomida} comida={f.nombre} getAlimento={props.getAlimento} />)}
            columns={columnasTable}
            pagination
        />
            </div>
        </div>
        </>
    );
}
export default EjemploLista;