import React from "react";
import Grafica from "../../components/grafica/Grafica"
import Dato from "../../components/visualizar/Dato"

function VisualizarLote() {
    
    

    return(
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[95%] sm:w-[95%] bg-[#DECBA4] mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Visualizar Lote</h2>                                                        
                    <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 p-5 w-[90%] mx-auto">                
                        <Dato clave="Id Lote" valor="123456"/>
                        <Dato clave="Nombre" valor="Hernesto"/>
                        <Dato clave="Cantidad Arboles" valor="152"/>
                        <Dato clave="Tipo Cafe" valor="Arabigo"/>
                        <Dato clave="Extension M2" valor="250"/>
                        <Dato clave="Fecha Siembra" valor="02/05/2020"/>
                        <Dato clave="Distancia Siembra Surcos" valor="1M"/>
                        <Dato clave="Distancia Siembra Plantas" valor="0.5M"/>
                        <Dato clave="Tipo Porte" valor="Bajo"/>
                        <Dato clave="Tipo Siembra" valor="Triangular"/>
                        <Dato clave="Abonado" valor="Si"/>
                        <Dato clave="Plagas" valor="No"/>
                    </div>
                    <div className="bg-white rounded-lg w-[90%] mx-auto my-5 shadow-sm">
                        <Grafica/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarLote;