import React, { Fragment, Component } from 'react';
import { Button } from '@material-ui/core'
import ModalDetalle from '../../Components/ModalDetalle'
import AlimentoList from "../../Components/AlimentoList"
import ModalAlimentos from '../../Components/ModalAlimentos'
import Swal from 'sweetalert2'
class ManTest extends Component {
    state = {
        data: [],
        typeAnemia: [],
        edadrango: [],
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
        openDetalle: false,
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

    CloseModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }
    CloseModalAlimento = () => {
        this.setState({
            openDetalle: !this.state.openDetalle
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
                inactivo: 0
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
                tipoalimento: alimento.tipoalimento,
                inactivo: alimento.inactivo
            },
            isEdit: true
            
        })
    }
    openOrCloseModalDetalle=()=>{
        this.setState({
            alimento: {
                ingredientes: '',
                preparacion: '',
            },
            openDetalle: !this.state.openDetalle,
        })
    }
    detalleAlimento=(alimento)=>{
        this.openOrCloseModalDetalle();
        this.setState({
            alimento: {
                ...this.state.alimento,
                idalimento: alimento.idalimento,
                ingredientes: alimento.ingredientes,
                preparacion: alimento.preparacion,
            },
            
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
    getTipoAnemia = async () => {
        const response = await fetch('https://tesisanemia.000webhostapp.com/TesisAnemia2/JSonListTipoAnemia.php');
        const typeAnemia = await response.json();
        this.setState({
            typeAnemia: typeAnemia.tipo_anemia,
        })

        console.log("test", typeAnemia)
        // this.setState({ data.comida })
    }
    getEdadRango = async () => {
        const response = await fetch('https://tesisanemia.000webhostapp.com/TesisAnemia2/JSonListRangoEdad.php');
        const edadrango = await response.json();
        this.setState({
            edadrango: edadrango.rango_edad,
        })

        console.log("test", edadrango)
        // this.setState({ data.comida })
    }
    componentDidMount() {
        this.getFamiliares();
        this.getTipoAnemia();
        this.getEdadRango();
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
            .then(response => {
                this.CloseModal();
                this.getFamiliares();
              })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
            
            
            
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
            .then(response => {
                this.CloseModal();
                this.getFamiliares();
              })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

                //const registro=response;
                //this.openOrCloseModal();
                //this.getFamiliares();
                // this.props.history.push('/manAlimento')
                // this.props.history.go(0);
                //console.log("ME", registro);
        }
    }
    handleEliminar = async (alimento) => {
        Swal.fire({
            title: ( alimento.inactivo == 1 ? '¿Desea Activar el alimento: ':'¿Desea Desactivar el alimento: ')+ alimento.nombre+'?',
            text:  alimento.inactivo == 1 ? 'Este registro se Activará!': 'Este registro se Desactivará!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:  alimento.inactivo == 1 ? 'Si, Activar!' : 'Si, desactivar!' ,
            cancelButtonText: 'Cancelar'
          }).then(async(result) => {
            if (result.value) {
                const aliment = {
                    alimento: {
                        //...this.state.alimento,
                        idalimento: alimento.idalimento,
                        inactivo: alimento.inactivo
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
                this.getFamiliares();
                // this.props.history.go(0);
                console.log("ME", data);
            }
          })
    }
    render() {
        //const { comida: data } = this.state.data
        return (
            <Fragment>
                {/* <>
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
                                    <th>Nombre</th>
                                    <th>Ingredientes</th>
                                    <th>Preparación</th>
                                    <th>Tipo Alimento</th>
                                    <th>Imagen</th>
                                    <th>Estado</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(f => <AlimentoItem key={f.idcomida} comida={f} getAlimento={this.getAlimento} handleEliminar={this.handleEliminar} />)}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </> */}
                {/* <Button variant="contained" color="secondary" onClick={this.openOrCloseModal}>
                        Agregar
                    </Button> */}
                {/* <AlimentoList/> */}
                <AlimentoList 
                    data={this.state.data || []} 
                    getAlimento={this.getAlimento} 
                    handleEliminar={this.handleEliminar} 
                    abrirModal={this.openOrCloseModal}
                    detalleAlimento={this.detalleAlimento}
                /> 
                <ModalAlimentos alimento={this.state.alimento}
                    open={this.state.openModal}
                    openOrCloseModal={this.CloseModal}
                    isEdit={this.state.isEdit}
                    handleChange={this.handleChange}
                    handleChangeImage={this.handleChangeImage}
                    handleSubmit={this.handleAgregar}
                    error={this.state.error}
                    errorText={this.state.errorText}
                    edadrango={this.state.edadrango || []}
                    typeAnemia={this.state.typeAnemia || []}/>
                <ModalDetalle 
                    alimento={this.state.alimento}
                    openDetalle={this.state.openDetalle}
                    openOrCloseModalDetalle={this.CloseModalAlimento}
                />
            </Fragment>
        )
    }
}

export default ManTest;