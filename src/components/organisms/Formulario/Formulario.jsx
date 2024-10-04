import React, { useState } from "react";
import './Formulario.css'
import InputCoordenadas from "../../molecules/InputCoordenadas/InputCoordenadas";
import InputSelect from "../../molecules/InputSelect/InputSelect";
import BotonCalc from "../../atoms/BotonCalc/BotonCalc";
import Resultado from "../../atoms/Resultado/Resultado";

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
    const [result, setResult] = useState(0)
    const potencias = [
        {nom: 'deci', val: 0.1},
        {nom: 'centi', val: 0.01},
        {nom: 'mili', val: 0.001},
        {nom: 'micro', val: 0.000001},
        {nom: 'nano', val: 0.000000001}
    ]
    const unoEntre4piPorEpsilonCero = 8987742437
    
    const calcular = () => {
        const valorCarga1 = parseFloat(carga1) * parseFloat(unidad1)
        const erre1aLaTresMedios = (x1**2+y1**2+z1**2)**(3/2)
        const q1EntreR = parseFloat(valorCarga1)/parseFloat(erre1aLaTresMedios)
        const vector1 = [parseFloat(q1EntreR)*parseFloat(x1), parseFloat(q1EntreR)*parseFloat(y1),parseFloat(q1EntreR)*parseFloat(z1)]

        const valorCarga2 = parseFloat(carga2) * parseFloat(unidad2)
        const erre2aLaTresMedios = (x2**2+y2**2+z2**2)**(3/2)
        const q2EntreR = parseFloat(valorCarga2)/parseFloat(erre2aLaTresMedios)
        const vector2 = [parseFloat(q2EntreR)*parseFloat(x2), parseFloat(q2EntreR)*parseFloat(y2),parseFloat(q2EntreR)*parseFloat(z2)]


        const valorCarga3 = parseFloat(carga3) * parseFloat(unidad3)
        const erre3aLaTresMedios = (x3**2+y3**2+z3**2)**(3/2)
        const q3EntreR = parseFloat(valorCarga3)/parseFloat(erre3aLaTresMedios)
        const vector3 = [parseFloat(q3EntreR)*parseFloat(x3), parseFloat(q3EntreR)*parseFloat(y3),parseFloat(q3EntreR)*parseFloat(z3)]

        const valorCarga4 = parseFloat(carga4) * parseFloat(unidad4)
        const erre4aLaTresMedios = (x4**2+y4**2+z4**2)**(3/2)
        const q4EntreR = parseFloat(valorCarga4)/parseFloat(erre4aLaTresMedios)
        const vector4 = [parseFloat(q4EntreR)*parseFloat(x4), parseFloat(q4EntreR)*parseFloat(y4),parseFloat(q4EntreR)*parseFloat(z4)]

        const valorCarga5 = (parseFloat(carga5) * parseFloat(unidad5))
        const erre5aLaTresMedios = (x5**2+y5**2+z5**2)**(3/2)
        const q5EntreR = (parseFloat(valorCarga5)/parseFloat(erre5aLaTresMedios))
        const vector5 = [(parseFloat(q5EntreR)*parseFloat(x5)), (parseFloat(q5EntreR)*parseFloat(y5)), ((parseFloat(q5EntreR)*parseFloat(z5)))]

        const vectorSemiFinal = [
            (parseFloat(vector1[0])+parseFloat(vector2[0])+parseFloat(vector3[0])+parseFloat(vector4[0])+parseFloat(vector5[0])),
            (parseFloat(vector1[1])+parseFloat(vector2[1])+parseFloat(vector3[1])+parseFloat(vector4[1])+parseFloat(vector5[1])),
            (parseFloat(vector1[2])+parseFloat(vector2[2])+parseFloat(vector3[2])+parseFloat(vector4[2])+parseFloat(vector5[2])),
            (parseFloat(vector1[3])+parseFloat(vector2[3])+parseFloat(vector3[3])+parseFloat(vector4[3])+parseFloat(vector5[3])),
            (parseFloat(vector1[4])+parseFloat(vector2[4])+parseFloat(vector3[4])+parseFloat(vector4[4])+parseFloat(vector5[4]))
        ]
        const vectorFinal = [
            (parseFloat(unoEntre4piPorEpsilonCero)*vectorSemiFinal[0]),
            (parseFloat(unoEntre4piPorEpsilonCero)*vectorSemiFinal[1]),
            (parseFloat(unoEntre4piPorEpsilonCero)*vectorSemiFinal[2]),
            (parseFloat(unoEntre4piPorEpsilonCero)*vectorSemiFinal[3]),
            (parseFloat(unoEntre4piPorEpsilonCero)*vectorSemiFinal[4]),
        ]
        console.log('v1', vector1,'v2', vector2, 'v3', vector3, 'v4', vector4, 'v5', vector5);
        
        setResult(vectorFinal[0] + ', ' + vectorFinal[1] + ', ' + vectorFinal[2]+ ', ' + vectorFinal[3]+ ', ' + vectorFinal[4])
    }
    
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

            <BotonCalc text = {"Calcular campo electrico"} funcion = {calcular} />
            <Resultado contenido = {result}  />

        </form>     
    );
}

export default Formulario