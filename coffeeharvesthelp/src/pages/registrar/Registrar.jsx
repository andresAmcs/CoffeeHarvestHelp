import React from "react";
import Inputs from "../../components/registrar/Inputs";

function Agregar(props) {
    

    return(
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] bg-neutral-300 mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Registrar</h2>                                                        
                    <form action={props.action}>
                        <Inputs para="#" texto="Nombre" icono="fa-user" tipoInput="text" id="nombre"/>
                        <Inputs para="#" texto="Apellido" icono="fa-user" tipoInput="text" id="apellido"/>
                        <Inputs para="#" texto="Documento" icono="fa-id-card" tipoInput="text" id="apellido"/>
                        <Inputs para="#" texto="Correo" icono="fa-envelope" tipoInput="number" id="tipoPago"/>
                        <Inputs para="#" texto="Pago" icono="fa-mars-and-venus" tipoInput="number" id="pago"/>
                        <Inputs para="#" texto="Contraseña" icono="fa-key" tipoInput="email" id="correo"/>
                        <Inputs para="#" texto="Confirmar Contraseña" icono="fa-key" tipoInput="text" id="genero"/>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Registrarme
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Agregar;