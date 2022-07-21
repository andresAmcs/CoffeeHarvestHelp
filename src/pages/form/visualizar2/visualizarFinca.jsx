import React,{ useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "../../../componets/nav/navbar"
import estado from "../../../pages/navBar"


function VisualizarFinca() {
    
    const navigate = useNavigate()

    const [user, setUser] = useState({
        nombreFinca: '',
        tipoFinca: '',
        ubicacionFinca: '',
        colindantes: '',
        totalHectareas: '',
        userId: '',
    });


    const params = useParams();

    const loadTask = async (id) => {
        const res = await fetch("https://coffeharvesthelp-api.herokuapp.com/api/v1/fincas/" + id);
        const data = await res.json();
        setUser({ nombreFinca: data.data.nombreFinca, tipoFinca: data.data.tipoFinca, ubicacionFinca: data.data.ubicacionFinca, colindantes: data.data.colindantes, totalHectareas: data.data.totalHectareas, userId: data.data.userId });
    console.log(data);
    };

    useEffect(() => {
        (async () => {
        await loadTask()
        })();
        
        console.log('mostrar finca id '+params.id)
        if (params.id) {
        loadTask(params.id);
        // getCat(params.id)
        }
    }, [params.id]);

    return(
        <>
        <Navbar buttons={estado}/>
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[95%] sm:w-[95%] bg-[#DECBA4] my-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Visualizar Finca</h2>                                                        
                    <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 p-5 w-[90%] mx-auto"> 


                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Nombre Finca</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.nombreFinca} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Tipo Finca</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.tipoFinca} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Ubicacion</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.ubicacionFinca} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Colindantes</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.colindantes} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Total Hectareas</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.totalHectareas} disabled/>
                        </div>

                        <div className="mb-6 w-[100%] sm:w-[95%] mx-auto">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">ID Dueño</label>
                            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.userId} disabled/>
                        </div>


                    </div>
                    <button onClick={()=>(navigate("/indexFincas"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Volver</button>
                    
                </div>
            </div>
        </div>
        </>
    )
}
    

export default VisualizarFinca