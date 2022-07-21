import React,{ useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";


function VisualizarFinca() {
    
    const navigate = useNavigate()

    const [user, setUser] = useState({
        id: '',
        nombreLote: '',
        cantArboles: '',
        tipoCafe: '',
        extensionM2: '',
        fechaSiembra: '',
        distanciaSiembraSurcos: '',
        distanciaSiembraPlantas: '',
        tipoPorte: '',
        tipoSiembra: '',
        abonado: '',
        plagas: '',
        fincaId: '',
    });


    const params = useParams();

    const loadTask = async (id) => {
        const res = await fetch("https://coffeharvesthelp-api.herokuapp.com/api/v1/lotes/" + id);
        const data = await res.json();
        setUser({   id: data.data.id,
                    nombreLote: data.data.nombreLote,
                    cantArboles: data.data.cantArboles, 
                    tipoCafe: data.data.tipoCafe, 
                    totalHectareas: data.data.totalHectareas, 
                    extensionM2: data.data.extensionM2 ,
                    fechaSiembra: data.data.fechaSiembra, 
                    distanciaSiembraSurcos: data.data.distanciaSiembraSurcos,
                    distanciaSiembraPlantas: data.data.distanciaSiembraPlantas,
                    tipoPorte: data.data.tipoPorte,
                    tipoSiembra: data.data.tipoSiembra,
                    abonado: data.data.abonado,
                    plagas: data.data.plagas,
                    fincaId: data.data.fincaId,
        }); 
    console.log(data);
    };

    useEffect(() => {
        (async () => {
        await loadTask()
        })();
        
        console.log('mostrar lotes id '+params.id)
        if (params.id) {
        loadTask(params.id);
        // getCat(params.id)
        }
    }, [params.id]);

    return(

        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[95%] sm:w-[95%] bg-[#DECBA4] my-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Visualizar Lote</h2>                                                        
                    <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 p-5 w-[90%] mx-auto"> 


                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Id</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.id} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Nombre Lote</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.nombreLote} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Cantidad Arboles</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.cantArboles} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Tico Cafe</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.tipoCafe} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Extencion M2</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.extensionM2} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Fecha Siembra</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={(user.fechaSiembra).substring(0,10)} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Distancia Surcos</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.distanciaSiembraSurcos} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Distancia Plantas</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.distanciaSiembraPlantas} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Tipo Porte</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.tipoPorte} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Tipo Siembra</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.tipoSiembra} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Abonado</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={(user.abonado?"SI":"NO")} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Plagas</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={(user.plagas?"SI":"NO")} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">ID Finca</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.fincaId} disabled/>
                        </div>


                    </div>
                    <button onClick={()=>(navigate("/indexLotes"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Volver</button>
                    
                </div>
            </div>
        </div>
    )
}
    

export default VisualizarFinca