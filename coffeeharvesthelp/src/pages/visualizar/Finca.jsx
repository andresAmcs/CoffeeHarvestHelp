import React from "react";
import Grafica from "../../components/grafica/Grafica"
import Dato from "../../components/visualizar/Dato"

function VisualizarFinca() {
    
    

    return(
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] bg-[#DECBA4] mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Visualizar Empleado</h2>                                                        
                    <div className="grid grid-cols-2 gap-4 p-5">                
                        <Dato clave="Documento" valor="123456"/>
                        <Dato clave="Nombre" valor="Fincota"/>
                        <Dato clave="Tipo Finca" valor="Ganadera"/>
                    </div>
                    <div className="bg-white rounded-lg w-[90%] mx-auto my-5 shadow-sm">
                        <Grafica/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarFinca;