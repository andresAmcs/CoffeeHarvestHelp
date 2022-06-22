import React from "react";
import Grafica from "../../components/grafica/Grafica"
import Dato from "../../components/visualizar/Dato"

function VisualizarEmpleado() {
    
    

    return(
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] bg-[#e69b75] mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Visualizar Empleado</h2>                                                        
                    <div className="grid grid-cols-2 gap-4 p-5">                
                        <Dato clave="Documento" valor="123456"/>
                        <Dato clave="Nombres" valor="Hernesto"/>
                        <Dato clave="Apellidos" valor="Perez"/>
                        <Dato clave="Pago" valor="250000"/>
                        <Dato clave="Genero" valor="M"/>
                        <Dato clave="Correo" valor="Perez@gmail.com"/>
                        <Dato clave="Tipo Contrato" valor="Por Kilos"/>
                    </div>
                    <div className="bg-white rounded-lg w-[90%] mx-auto my-5 shadow-sm">
                        <Grafica/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualizarEmpleado;