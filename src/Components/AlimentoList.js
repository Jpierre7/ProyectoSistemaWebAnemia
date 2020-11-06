import React from 'react'
import { Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DataTable from 'react-data-table-component'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BlockIcon from '@material-ui/icons/Block';
import DoneIcon from '@material-ui/icons/Done';

function EjemploLista(props) {
    const columnasTable = [
        {
            name: 'Nombre',
            selector: 'nombre',
            // cell: row => <>Monago</>,
            sortable: true,
            wrap:true
        },
        // {
        //     name: 'Ingredientes',
        //     selector: 'ingredientes',
        //     // cell: row => <>Monago</>,
        //     sortable: true,
        //     // grow: 1
        //     wrap:true
        // },

        // {
        //     name: 'Preparacion',
        //     selector: 'preparacion',
        //     // cell: row => <>Monago</>,
        //     sortable: true,
        //     wrap:true
        // },
        {
            name: 'Tipo Alimento',
            selector: 'tipoalimento',
            cell: row => <p>{row.tipoalimento == 1 ? "Desayuno" : row.tipoalimento == 2 ? "Almuerzo" : "Cena"}</p>,
            sortable: true,
            wrap:true
        },
        {
            name: 'Estado',
            // selector: 'inactivo',
            cell: row => <p>{row.inactivo == 0 ? "Activo" : "Inactivo"}</p>,
            sortable: true,
            // wrap: true,
        },
        {
            name: 'Imagen',
            cell: row => <img src={row.ruta} width='100px' height='100px' />,
            sortable: true,
            // wrap: true,
        },
        {
            name: "Opciones",
            sortable: true,
            cell: row => <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined primary button group"
            >
                <IconButton
                    variant="contained"
                    color="primary"
                    // onClick={handleClickOpen}
                    onClick={() => { props.getAlimento(row) }}>
                    <EditIcon />
                </IconButton>
                <IconButton
                    variant="contained"
                    color={row.inactivo == 0 ? "secondary" : "primary"}
                    // onClick={handleClickOpen}
                    onClick={() => { props.handleEliminar(row) }}>
                    {row.inactivo == 0 ? <BlockIcon /> : <DoneIcon />}
                </IconButton>
                <IconButton
                    variant="contained"
                    color="primary"
                    // onClick={handleClickOpen}
                    onClick={() => { props.detalleAlimento(row) }}>
                    <DoneIcon/>
                </IconButton>
            </ButtonGroup>
            ,
            // wrap: true,

            // width:'130px',
        }
    ]
    const condicionalActivo = [
        {
            when: row => row.inactivo == 1,
            style: {
                background: '#D2664E',
                color: 'white'
            },

        }
    ]
 
    return (
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
                    data={props.data}
                    // subHeaderWrap
                    // responsive
                    noHeader={true}
                    onRowDoubleClicked={props.getAlimento}
                    conditionalRowStyles={condicionalActivo}
                    paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
                    // width="20%"
                    // data={props.data.map(f => <AlimentoItem key={f.idcomida} comida={f.nombre} getAlimento={props.getAlimento} />)}
                    columns={columnasTable}
                    // actions={agregar}
                    pagination
                />
            </div>
        </div>

    );
}
export default EjemploLista;