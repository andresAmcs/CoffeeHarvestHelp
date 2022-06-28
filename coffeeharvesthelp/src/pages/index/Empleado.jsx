import React from "react";
import Th from "../../components/index/Th";
import Buttons from "../../components/index/Buttons"



function IndexEmpleado(props) {

    return (
        <div>
            <table className="w-[92%] text-sm text-left text-gray-500 dark:text-gray-400 my-10 mx-auto hidden sm:hidden md:hidden lg:hidden 2xl:table xl:table">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
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
        
            <table className="w-[92%] mx-auto text-sm text-left text-gray-500 dark:text-gray-400 my-10 table sm:table md:table lg:table 2xl:hidden xl:hidden">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <Th nombre="Nombres" />
                        <Th nombre="" />
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <Th nombre={props.ID} />
                        <Th nombre={props.nombres} />

                        <Buttons visualizar="empleado" actualizar="empleado" />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default IndexEmpleado;