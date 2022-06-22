import React from "react";
import Inputs from "./Inputs";
import Boton from '../boton/Boton';

function Añadir(props) {
    

    return(
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[70%] bg-neutral-300 mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Añadir {props.nombre}</h2>                                                        
                    <form action={props.action}>
                        <Inputs para="#" texto="Nombre" icono="fa-user" tipoInput="text" id="nombre"/>
                        <Inputs para="#" texto="Meses" icono="fa-id-card" tipoInput="date" id="meses"/>
                        <Inputs para="#" texto="Descripcion" icono="fa-id-card" tipoInput="text" id="descripcion"/>
                    </form>
                    <div className="flex justify-center">                
                        <button className="my-5">
                            <Boton texto="Añadir Actividad"/> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Añadir;