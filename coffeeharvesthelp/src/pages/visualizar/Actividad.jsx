import React from "react";
import Dato from "../../components/visualizar/Dato"

function VisualizarActividad() {
    
    

    return(
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] bg-[#e69b75] mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Visualizar Empleado</h2>                                                        
                    <div className="grid grid-cols-2 gap-4 p-5">                
                        <Dato clave="Id Actividad" valor="02120"/>
                        <Dato clave="Meses" valor="Enero---Marzo"/>
                        <Dato clave="Actividad" valor="Plateo"/>
                        <Dato clave="Pago" valor="250000"/>
                        <Dato clave="Descripcion" valor="Faltan Perras, de resto melo B)"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarActividad;