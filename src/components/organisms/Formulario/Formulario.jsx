import React, { useState } from "react";
import './Formulario.css'
import InputCoordenadas from "../../molecules/InputCoordenadas/InputCoordenadas";
import InputSelect from "../../molecules/InputSelect/InputSelect";
import BotonCalc from "../../atoms/BotonCalc/BotonCalc";

function Formulario( props ){//Le pasamos el [value, setValue()] que corresponda
    const [originX, setOriginX] = useState(0)
    const [originY, setOriginY] = useState(0)
    const [originZ, setOriginZ] = useState(0) //Coordenadas del origen
    const [cargas, setCargas] = useState([{carga: 0, x: 0, y: 0, z: 0}])

    const InputsCargas = cargas.map((carga, index) => (
        <div>
            <InputSelect />
            <InputCoordenadas
                idX={"Coord_X_"+index} valueX = {carga.x} setValueX = {setOriginX}
                idY={"Coord_Y_"+index} valueY = {carga.y} setValueY = {setOriginY}
                idZ={"Coord_Z_"+index} valueZ = {carga.z} setValueZ = {setOriginZ} />
        </div>
    ))  

    const agregarCarga = () => {
        setCargas((prevCargas) => [
            ...prevCargas,
            { carga: 0, x: 0, y: 0, z: 0 }
        ]);
    };

    const modificarCarga = (index, nuevaCarga) => {
        setCargas((prevCargas) => 
            prevCargas.map((carga, i) => 
                i === index ? { ...carga, ...nuevaCarga } : carga
            )
        );
    };
    
    return(
        <form action="">
            <label htmlFor="">Punto a analizar</label>
            <InputCoordenadas
                idX={"origenX"} valueX = {originX} setValueX = {setOriginX}
                idY={"origenY"} valueY = {originY} setValueY = {setOriginY}
                idZ={"origenZ"} valueZ = {originZ} setValueZ = {setOriginZ} />

            { InputsCargas }

            <BotonCalc texto="Agregar carga" funcion={agregarCarga} />

        </form>     
    );
}

export default Formulario