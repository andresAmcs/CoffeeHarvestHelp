import React from "react";
import Inputs from "../../components/actualizar/Inputs";
import Select from '../../components/actualizar/select';
import Boton from '../../components/actualizar/Button';

function ActualizarEmpleado(props) {


    return (
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] bg-[#DECBA4] mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl">
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Actualizar {props.nombre}</h2>
                    <form action={props.action}>
                        <Inputs para="#" texto="Nombre" icono="fa-user" tipoInput="text" id="nombre" />
                        <Inputs para="#" texto="Documento" icono="fa-id-card" tipoInput="number" id="documento" />
                        <Select para="#" texto="Tipo Pago" icono="fa-sack-dollar" id="tipoPago" option1="algo" option2="algo2"></Select>
                        <Inputs para="#" texto="Pago" icono="fa-dollar-sign" tipoInput="number" id="pago" />
                        <Inputs para="#" texto="Correo" icono="fa-envelope" tipoInput="email" id="correo" />
                        <Select para="#" texto="Genero" icono="fa-mars-and-venus" id="genero" option1="Femenino" option2="Masculino"></Select>
                    </form>
                    <div className="flex justify-center">
                        <button className="my-5">
                            <Boton texto="Actualizar Empleado" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ActualizarEmpleado;