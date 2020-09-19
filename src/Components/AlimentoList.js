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
            selector: 'nombre',
            sortable: true ,
            // maxWidth:'200px',
            wrap: true,
        },
        {
            name:'Ingredientes',
            selector: 'ingredientes',
            sortable: true ,
            // maxWidth:'200px',
            wrap: true,
        },

        {
            name:'Preparacion',
            selector: 'preparacion',
            sortable: true ,
            // maxWidth:'200px',
            wrap: true,
        },
        {
            name:'Estado',
            // selector: 'inactivo',
        cell: row =><p>{row.inactivo==0?"Activo":"Inactivo"}</p>,
            sortable: true ,
            wrap: true,
        },
        {
            name:'Imagen',
            cell: row =><img src={row.ruta} width='100px' height='100px'/>, 
            sortable: true ,
            wrap: true,
        },
        {
            name:"Opciones",
            sortable: true ,
            cell: row => <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined primary button group"
            >
                <IconButton 
            variant="contained"
            color="primary"
            // onClick={handleClickOpen}
            onClick={()=>{props.getAlimento(row)}}>
            <EditIcon />
            </IconButton>
            <IconButton 
            variant="contained"
            color={row.inactivo==0?"secondary": "primary"}
            // onClick={handleClickOpen}
            onClick={()=>{props.handleEliminar(row)}}>
            {row.inactivo==0 ? <BlockIcon />:<DoneIcon /> }
            </IconButton>
            </ButtonGroup>
            ,
            wrap: true,
          
            // width:'130px',
        },
        // {
        //     cell:()=><button className="btn btn-danger"> INACTIVO</button>
        // }
    ]
    const condicionalActivo=[
        {
        when: row => row.inactivo==1,
        style: {
            background: '#D2664E',
            color: 'white'
        },
        
        }
    ]
    const paginacionUpdate={
        
    }
    const agregar=(<Button onClick={()=>{props.abrirModal()}} variant="contained" color="secondary">Agregar</Button>)
    console.log("Datos:", props.data);
    return(
        <>
        {/* <Button>Agregar</Button> */}
        {/* <Button>Exportar</Button> */}
        <DataTable
            title="Alimento"
            data={props.data}
            // subHeaderWrap
            // responsive
            onRowDoubleClicked={props.getAlimento}
            conditionalRowStyles={condicionalActivo}
            paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
            // width="20%"
            // data={props.data.map(f => <AlimentoItem key={f.idcomida} comida={f.nombre} getAlimento={props.getAlimento} />)}
            columns={columnasTable}
            actions={agregar}
            pagination
        />
        </>
    );
}
export default EjemploLista;