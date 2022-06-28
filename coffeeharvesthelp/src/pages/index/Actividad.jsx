import React from "react";
import Th from "../../components/index/Th";
import Buttons from "../../components/index/Buttons"


function IndexActividad(props) {

    return (
        <div >
            <table className="w-[92%] text-sm text-left text-gray-500 dark:text-gray-400 my-10 mx-auto hidden sm:hidden md:hidden lg:hidden 2xl:table xl:table">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <Th nombre="Nombres" />
                        <Th nombre="Tipo Actividad" />
                        <Th nombre="Fecha" />
                        <Th nombre="" />
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <Th nombre={props.ID} />
                        <Th nombre={props.nombre} />
                        <Th nombre={props.tipoActividad} />
                        <Th nombre={props.fecha} />

                        <Buttons visualizar="actividad" actualizar="actividad" />
                    </tr>
                </tbody>
            </table>

            <table className="w-[92%] text-sm text-left text-gray-500 dark:text-gray-400 my-10 mx-auto table sm:table md:table lg:table 2xl:hidden xl:hidden">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <Th nombre="Tipo Actividad" />
                        <Th nombre="Fecha" />
                        <Th nombre="" />
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <Th nombre={props.ID} />
                        <Th nombre={props.tipoActividad} />
                        <Th nombre={props.fecha} />

                        <Buttons visualizar="actividad" actualizar="actividad" />
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default IndexActividad;