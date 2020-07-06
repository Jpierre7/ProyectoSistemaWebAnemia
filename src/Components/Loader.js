import React, {Component} from 'react';
import './Styles/Loader.css';

class Loader extends Component {
    render(){
        return(
            <>
            <div className="lds-grid">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
            <h1 className="h1">CARGANDO</h1>
            </>
        )
    }
}
export default Loader;