import React from "react";
import './InputSelect.css'
import InputDato from "../../atoms/InputDato/Inputdato";
import Options from "../../atoms/Options/Options";

function InputSelect( props ){//Le pasamos el [value, setValue()] del input y [value, setValue()] del select que corresponda y una lista de options
    return(
        <div>
            <InputDato 
                value={props.valueInput}
                setValue={props.setValueInput} />
            <Options 
                value={props.valueSelect}
                setValue={props.setValueSelect}
                list={props.listOptions} />
        </div>
    );
}

export default InputSelect