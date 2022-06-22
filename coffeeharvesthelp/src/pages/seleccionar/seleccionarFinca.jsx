import React from "react";
import Fila from "../../components/seleccionar/Dato";

function AgregarFinca(props) {
    

    return(
        <div className="flex justify-center">        
        <div className="h-[90%] w-[90%] bg-neutral-300 my-10 rounded-2xl">            
            <div className="p-4">                
                <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Seleccione la finca con la cual trabajara</h2>                                    
            </div>
            <div className="relative rounded-xl overflow-auto">
                <div className="flex w-[60%] mx-[20%] mt-10">
                    <span className="inline-flex items-center px-3 text-2xl text-gray-900 border rounded-l-md dark:bg-stone-900 dark:text-gray-400">
                        <i className="fa-solid fa-house"></i>
                    </span>
                    <input type="text" id="nombre" className="rounded-none rounded-r-lg border focus:ring-blue-500 focus:border-blue-500 block flex-1 p-2.5 0" placeholder="Id de la finca"/>
                </div>   
                <div className="shadow-sm overflow-hidden my-8">
                    <table className="mx-auto w-[90%]">
                        <thead className="bg-white dark:bg-slate-800 text-slate-500">
                            <tr className="text-center">
                                <Fila valor="#"/>
                                <Fila valor="Nombre"/>
                                <Fila valor="Tipo de Finca"/>
                                <Fila valor="Ubicacion"/>                                                                                           
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800">
                            <tr className="text-center">
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">789</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">a</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">a</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">a</td>                                
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className="my-5 flex ml-[5%]">
                        <button type="submit" className="w-[200px] py-4 text-lg bg-green-600 text-white rounded-full shadow-sm">Seleccionar Finca</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default AgregarFinca;