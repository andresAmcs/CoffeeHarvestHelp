import React from "react";
import Inputs from "../../components/aniadir/Inputs";
import Boton from "../../components/aniadir/Buttons";

function Añadir(props) {
    

    return(
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] xl:w-[80%] md:w-[90%] sm:w-[90%] 2xl:w-[60%] bg-[#DECBA4] mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl ">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Añadir Finca</h2>                                                        
                    <form action={props.action}>
                        <Inputs para="#" texto="Nombre de finca" icono="fa-user" tipoInput="text" id="nombreFinca"/>
                        <Inputs para="#" texto="Tipo de finca" icono="fa-id-card" tipoInput="text" id="tipoFinca"/>
                        <Inputs para="#" texto="Ubicacion de la finca" icono="fa-id-card" tipoInput="text" id="ubicacionFinca"/>
                        <Inputs para="#" texto="Colindantes" icono="fa-id-card" tipoInput="text" id="colindantes"/>
                        <Inputs para="#" texto="Total de hectareas" icono="fa-id-card" tipoInput="number" id="totalHectareas"/>
                    </form>
                    <div className="flex justify-center">                
                        <button className="my-5">
                            <Boton texto="Añadir Finca"/> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Añadir;