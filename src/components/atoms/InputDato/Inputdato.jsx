import React from "react";
import './InputDato.css'

function InputDato( props ){//Le pasamos el [value, setValue()] que corresponda

    return(
        <input id={props.id} type="number" value={props.value} onChange={(e) => setValue(e.target.value)} />
    );
}

export default InputDato