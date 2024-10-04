import React from "react";
import './InputCoordenadas.css';
import InputDato from "../../atoms/InputDato/Inputdato";

function InputCoordenadas( props ){//Este s para poder ingresar los datos de la coordenada en un input por cada x, y z
    return(
        <div className="fila">
            <label htmlFor="">Coordenada en x</label>
            <InputDato 
                id = {props.idX}
                value = {props.valueX}
                setValue = {props.setValueX} />
            <label htmlFor="">Coordenada en Y</label>
            <InputDato 
                id = {props.idY}
                value = {props.valueY}
                setValue = {props.setValueY} />
            <label htmlFor="">Coordenada en Z</label>
            <InputDato 
                id = {props.idZ}
                value = {props.valueZ}
                setValue = {props.setValueZ} />
        </div> 
    );
}

export default InputCoordenadas