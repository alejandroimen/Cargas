import React from "react";
import './BotonCalc.css'

function BotonCalc( props ){
    return(
        <button onClick={props.funcion}> {props.text} </button> //Boton generico al q se le pasa la funcion y el texto   
    );
}

export default BotonCalc