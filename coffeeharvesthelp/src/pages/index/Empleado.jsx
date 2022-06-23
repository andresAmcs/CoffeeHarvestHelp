import React from "react";
import Th from "../../components/index/Th";
import Buttons from "../../components/index/Buttons"



function IndexEmpleado(props) {

    return (

        <table className="w-[92%] text-sm text-left text-gray-500 dark:text-gray-400 my-10 mx-12">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <Th nombre="Nombres" />
                    <Th nombre="Apellidos" />
                    <Th nombre="Genero" />
                    <Th nombre="" />
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <Th nombre={props.ID} />
                    <Th nombre={props.nombres} />
                    <Th nombre={props.apellidos} />
                    <Th nombre={props.genero} />

                    <Buttons visualizar="empleado" actualizar="empleado" />
                </tr>
            </tbody>
        </table>

    )
}

export default IndexEmpleado;