import React, { Fragment, Component } from 'react';
import { Button } from '@material-ui/core'

import AlimentoList from "../../Components/AlimentosList"
import ModalAlimentos from '../../Components/ModalAlimentos'
import AlimentoItem from '../../Components/AlimentoItem'

import Swal from 'sweetalert2'
class ManTest extends Component {
    state = {
        data: [],
        alimento: {
            idalimento: 0,
            nombre: '',
            ingredientes: '',
            preparacion: '',
            ruta: '',
            edad_rango: 0,
            idtipo_anemia_FK: 0,
            tipoalimento: 0,
            inactivo:0
        },
        imgruta: null,
        openModal: false,
        isEdit: false,
        error: false,
        errorText: "",
    }
    //FUNCIONES DE VALIDACION Y MODAL
    openAlertModalEliminar = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }

    openOrCloseModal = () => {
        this.setState({
            alimento: {
                nombre: '',
                ingredientes: '',
                preparacion: '',
                ruta: null,
                edad_rango: 0,
                idtipo_anemia_FK: 0,
                tipoalimento: 0,
            },
            openModal: !this.state.openModal,
            isEdit: false,
            error: false,
            errorText: "",
            validate: false
        })
    }

    getAlimento = (alimento) => {
        console.log('Alimento:', alimento);
        this.openOrCloseModal();

        this.setState({
            alimento: {
                ...this.state.alimento,
                idalimento: alimento.idalimento,
                nombre: alimento.nombre,
                ingredientes: alimento.ingredientes,
                preparacion: alimento.preparacion,
                edad_rango: alimento.edad_rango,
                idtipo_anemia_FK: alimento.idtipo_anemia_FK,
                tipoalimento: alimento.tipoalimento
            },
            isEdit: true
            
        })
    }
    //EVENTO DE INGRESAR DATOS 
    getFamiliares = async () => {
        const response = await fetch('https://tesisanemia.000webhostapp.com/TesisAnemia2/JSonListAlimento2.php');
        const data = await response.json();
        this.setState({
            data: data.comida,
        })

        console.log("dataa", data)
        // this.setState({ data.comida })
    }

    componentDidMount() {
        this.getFamiliares();
    }
    handleChange = (e) => {
        this.setState({
            alimento: {
                ...this.state.alimento,
                [e.target.name]: e.target.value
            }

        });
        //this.state.alimento.ruta = e.target.files[0];
        console.log('Nombre', [e.target.name]);
        console.log('Valor', e.target.value);
    }
    handleChangeImage = (e) =>{
        //this.state.alimento.ruta = e.target.files[0]
        this.setState({
            imgruta: e.target.files[0]
        });
        console.log("Ruta Imagen", [e.target.files[0]]);
        console.log("Valor", e.target.value);
    }
    handleAgregar = async (e) => {
        e.preventDefault();
        if (this.state.isEdit) {
            console.log('alimento', this.state.alimento.idalimento);
            const data=new FormData();
            data.append('idalimento', this.state.alimento.idalimento)
            data.append('nombre', this.state.alimento.nombre);
            data.append('ingredientes', this.state.alimento.ingredientes);
            data.append('preparacion', this.state.alimento.preparacion);
            data.append('ruta', this.state.imgruta);
            data.append('edad_rango', this.state.alimento.edad_rango);
            data.append('idtipo_anemia_FK', this.state.alimento.idtipo_anemia_FK);
            data.append('tipoalimento', this.state.alimento.tipoalimento);
            fetch('http://tesisanemia.000webhostapp.com/TesisAnemia2/JSonActualizarAlimentoPOST.php', {
                method: "POST",
                body: data,
                headers: {
                    // 'Accept': 'application/json',
                    // 'Content-Type':'application/json'
                },

            })
            .then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
            this.openOrCloseModal();
            this.getFamiliares();
            // this.props.history.go(0);
            console.log("ME", data);

        } else {
            const data=new FormData();
            data.append('nombre', this.state.alimento.nombre);
            data.append('ingredientes', this.state.alimento.ingredientes);
            data.append('preparacion', this.state.alimento.preparacion);
            data.append('ruta', this.state.imgruta);
            data.append('edad_rango', this.state.alimento.edad_rango);
            data.append('idtipo_anemia_FK', this.state.alimento.idtipo_anemia_FK);
            data.append('tipoalimento', this.state.alimento.tipoalimento);
            //console.log("DATA:", data.append);
            // console.log("Entra");
            // console.log("IMAGEN:", this.state.alimento.ruta);
            /*
                const response = await fetch('http://tesisanemia.000webhostapp.com/TesisAnemia2/JSonInsertAlimentoPOST.php', {
                    method: "POST",
                    body: data,
                    headers: {
                        // 'Accept': 'application/json',
                        // 'Content-Type':'application/json'
                    },

                })
                // console.log("RESPONSE", response.json());
            */
           fetch('http://tesisanemia.000webhostapp.com/TesisAnemia2/JSonInsertAlimentoPOST.php', {
  method: 'POST',
  body: data
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

                //const registro=response;
                this.openOrCloseModal();
                this.getFamiliares();
                // this.props.history.push('/manAlimento')
                // this.props.history.go(0);
                //console.log("ME", registro);
        }
    }
    handleEliminar = async (alimento) => {
        Swal.fire({
            title: '¿Desea Desactivar el alimento: '+ alimento.nombre+'?',
            text: "Este registro se desactivará!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, desactivar!',
            cancelButtonText: 'Cancelar'
          }).then(async(result) => {
            if (result.value) {
                const aliment = {
                    alimento: {
                        //...this.state.alimento,
                        idalimento: alimento.idalimento
                    }
                };
        
                const response = await fetch('http://tesisanemia.000webhostapp.com/TesisAnemia2/JSonEliminarLogAlimentoPOST.php', {
                    method: "POST",
                    body: JSON.stringify(aliment.alimento),
                    headers: {
                        // 'Accept': 'application/json',
                        // 'Content-Type':'application/json'
                    },
        
                })
                const data = await response.json();
                //this.getFamiliares();
                // this.props.history.go(0);
                console.log("ME", data);
            }
          })
    }
    render() {
        return (
            <Fragment>
                <>
                    <div className="card">
                        <div style={{backgroundColor:"#b02a2a"}} className="card-header  text-white" >
                            <h1>Lista de Alimentos</h1>
                        </div>
                        <div className="card-body">
                            
                    <Button variant="contained" color="secondary" onClick={this.openOrCloseModal}>
                        Agregar
                    </Button>
                        <table className="table table-responsive">
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
                            {this.state.data.map(f => <AlimentoItem key={f.idcomida} comida={f} getAlimento={this.getAlimento} handleEliminar={this.handleEliminar} />)}
                        </tbody>
                    </table>
                        </div>
                    </div>
                </>
                <ModalAlimentos alimento={this.state.alimento}
                    open={this.state.openModal}
                    openOrCloseModal={this.openOrCloseModal}
                    isEdit={this.state.isEdit}
                    handleChange={this.handleChange}
                    handleChangeImage={this.handleChangeImage}
                    handleSubmit={this.handleAgregar}
                    error={this.state.error}
                    errorText={this.state.errorText} />
            </Fragment>
        )
    }
}

export default ManTest;