import React from "react";
import Inputs from "./Inputs";
import Boton from '../boton/Boton';
import Select from './select';

function Añadir(props) {
    
    return(
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[65%] bg-neutral-300 mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl ">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Añadir {props.nombre}</h2>                                                        
                    <form action={props.action}>
                        <Inputs para="#" texto="Nombre del Lote" icono="fa-user" tipoInput="text" id="nombreLote"/>
                        <Inputs para="#" texto="Cantidad de Arboles" icono="fa-id-card" tipoInput="number" id="cantidadArboles"/>
                        <Inputs para="#" texto="Tipo de Cafe" icono="fa-sack-dollar" tipoInput="text" id="tipoCafe" />
                        <Inputs para="#" texto="Extension Metros Cuadrados M2" icono="fa-dollar-sign" tipoInput="number" id="extensionM2"/>
                        <Inputs para="#" texto="Fecha Siembra" icono="fa-envelope" tipoInput="date" id="fechaSiembra"/>
                        <Inputs para="#" texto="Distancia de Surcos" icono="fa-mars-and-venus" tipoInput="number" id="distanciaSurcos"/>
                        <Inputs para="#" texto="Distancia de Siembra" icono="fa-mars-and-venus" tipoInput="number" id="distanciaSiembra"/>
                        <Inputs para="#" texto="Tipo de Porte" icono="fa-mars-and-venus" tipoInput="text" id="tipoPorte"/>
                        <Inputs para="#" texto="Tipo de Siembra" icono="fa-mars-and-venus" tipoInput="text" id="tipoSiembra"/>
                        <Select para="#" texto="Abonado" icono="fa-mars-and-venus" id="abonado" option1="Verdadero" option2="Falso"></Select>
                        <Select para="#" texto="Plagas" icono="fa-mars-and-venus" id="plagas" option1="Verdadero" option2="Falso"></Select>
                    </form>
                    <div className="flex justify-center">                
                        <button className="my-5">
                            <Boton texto="Añadir Lote"/> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Añadir;