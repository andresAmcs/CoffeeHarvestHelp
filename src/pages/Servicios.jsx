import React from "react";
import Texto from "../componets/Texto";

function CoffeHarvestHelp() {


    return (
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] xl:w-[80%] md:w-[90%] sm:w-[90%] 2xl:w-[60%] bg-[#DECBA4] mt-10 mb-10 rounded-2xl">
                <Texto titulo="Coffe Harvest Help" texto="Coffee harvest help es un sofware, el cual tiene como principal objetivo ayudar e incentivar al caficultor, especialmente pequeño, a llevar el control de sus finanzas.
Tambien se podra llevar el seguimiento de las tareas a realizar, esto con datos que nos brindara el administrador."/>
                <Texto titulo="Servicio" texto="El servicio que Coffe Harvest Help provee la facil administracion de datos en una finca cafetera llevando asi una trazabilidad ecomnomica."/>
                <Texto titulo="Objetivo" texto="Gestionar la trazabilidad económica de una finca cafetera, tomando en cuenta cada una de las etapas de la cosecha. "/>
            </div>
        </div>
    )
}

export default CoffeHarvestHelp;