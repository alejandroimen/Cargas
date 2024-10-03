import React from "react";
import './Options.css'

function Options( props ){//se le pasa el [value, setvalue()] y una lista con la sopciones para despegar en el select
    const options = props.list.map((optn, index) => (
        <option key={optn} value={index}>
            {optn}
        </option>
    ))

    return(
        <select name="" id={props.id} value={props.value} onChange={(e) => props.setValue(e.target.value)}>
            {options}
        </select>
    );
}

export default Options