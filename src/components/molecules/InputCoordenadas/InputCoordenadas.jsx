import React from "react";
import './InputCoordenadas.css';
import InputDato from "../../atoms/InputDato/Inputdato";

function InputCoordenadas( props ){//Este s para poder ingresar los datos de la coordenada en un input por cada x, y z
    return(
        <div className="fila">
            <InputDato 
                id = {props.idX}
                value = {props.valueX}
                setvalueX = {props.setValueX} />
            <InputDato 
                id = {props.idY}
                value = {props.valueY}
                setvalue = {props.setValueY} />
            <InputDato 
                id = {props.idZ}
                value = {props.valueZ}
                setvalue = {props.setValueZ} />
        </div> 
    );
}

export default InputCoordenadas