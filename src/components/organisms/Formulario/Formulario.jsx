import React, { useState } from "react";
import './Formulario.css'
import InputCoordenadas from "../../molecules/InputCoordenadas/InputCoordenadas";
import InputSelect from "../../molecules/InputSelect/InputSelect";
import BotonCalc from "../../atoms/BotonCalc/BotonCalc";

function Formulario( props ){//Le pasamos el [value, setValue()] que corresponda
    const [originX, setOriginX] = useState(0)
    const [originY, setOriginY] = useState(0)
    const [originZ, setOriginZ] = useState(0) //Coordenadas del origen
    const [carga1, setCarga1] = useState(0)//Info de Primera carga
    const [x1, setX1] = useState(0)
    const [y1, setY1] = useState(0)
    const [z1, setZ1] = useState(0)
    const [unidad1, setUnidad1] = useState(1)
    const [carga2, setCarga2] = useState(0)//Info de Segunda carga
    const [x2, setX2] = useState(0)
    const [y2, setY2] = useState(0)
    const [z2, setZ2] = useState(0)
    const [unidad2, setUnidad2] = useState(1)
    const [carga3, setCarga3] = useState(0)//Info de Tercera carga
    const [x3, setX3] = useState(0)
    const [y3, setY3] = useState(0)
    const [z3, setZ3] = useState(0)
    const [unidad3, setUnidad3] = useState(1)
    const [carga4, setCarga4] = useState(0)//Info de Cuarta carga
    const [x4, setX4] = useState(0)
    const [y4, setY4] = useState(0)
    const [z4, setZ4] = useState(0)
    const [unidad4, setUnidad4] = useState(1)
    const [carga5, setCarga5] = useState(0)//Info de Quinta carga
    const [x5, setX5] = useState(0)
    const [y5, setY5] = useState(0)
    const [z5, setZ5] = useState(0)
    const [unidad5, setUnidad5] = useState(1)
    const potencias = ['deci', 'centi', 'micro', 'nano']
    
    
    return(
        <form action="">
            <label htmlFor="">Punto a analizar</label>
            <InputCoordenadas
                idX={"origenX"} valueX = {originX} setValueX = {setOriginX}
                idY={"origenY"} valueY = {originY} setValueY = {setOriginY}
                idZ={"origenZ"} valueZ = {originZ} setValueZ = {setOriginZ} />
            <div>
                <InputSelect
                    idInput={"x1Input"} valueInput = {carga1} setValueInput = {setCarga1}
                    idSelect={"x1Select"} valueSelect = {unidad1} setValueSelect = {setUnidad1} listOptions={potencias} />
                <InputCoordenadas
                    idX={"x1"} valueX = {x1} setValueX = {setX1}
                    idY={"y1"} valueY = {y1} setValueY = {setY1}
                    idZ={"z1"} valueZ = {z1} setValueZ = {setZ1} />
            </div>
            <div>
                <InputSelect
                    idInput={"x2Input"} valueInput = {carga2} setValueInput = {setCarga2}
                    idSelect={"x2Select"} valueSelect = {unidad2} setValueSelect = {setUnidad2} listOptions={potencias} />
                <InputCoordenadas
                    idX={"x2"} valueX = {x2} setValueX = {setX2}
                    idY={"y2"} valueY = {y2} setValueY = {setY2}
                    idZ={"z2"} valueZ = {z2} setValueZ = {setZ2} />
            </div>
            <div>
                <InputSelect
                    idInput={"x3Input"} valueInput = {carga3} setValueInput = {setCarga3}
                    idSelect={"x3Select"} valueSelect = {unidad3} setValueSelect = {setUnidad3} listOptions={potencias} />
                <InputCoordenadas
                    idX={"x3"} valueX = {x3} setValueX = {setX3}
                    idY={"y3"} valueY = {y3} setValueY = {setY3}
                    idZ={"z3"} valueZ = {z3} setValueZ = {setZ3} />
            </div>
            <div>
                <InputSelect
                    idInput={"x4Input"} valueInput = {carga4} setValueInput = {setCarga4}
                    idSelect={"x4Select"} valueSelect = {unidad4} setValueSelect = {setUnidad4} listOptions={potencias} />
                <InputCoordenadas
                    idX={"x4"} valueX = {x4} setValueX = {setX4}
                    idY={"y4"} valueY = {y4} setValueY = {setY4}
                    idZ={"z4"} valueZ = {z4} setValueZ = {setZ4} />
            </div>
            <div>
                <InputSelect
                    idInput={"x5Input"} valueInput = {carga5} setValueInput = {setCarga5}
                    idSelect={"x5Select"} valueSelect = {unidad5} setValueSelect = {setUnidad5} listOptions={potencias} />
                <InputCoordenadas
                    idX={"x5"} valueX = {x5} setValueX = {setX5}
                    idY={"y5"} valueY = {y5} setValueY = {setY5}
                    idZ={"z5"} valueZ = {z5} setValueZ = {setZ5} />
            </div>
        </form>     
    );
}

export default Formulario