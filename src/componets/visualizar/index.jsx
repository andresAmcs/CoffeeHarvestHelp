import React from "react";
import Data from "./data";
import Grafic from "../Grafica"
import Navbar from "../nav/navbar";
import estado from "../../pages/navBar"
function Visualizar({datas}){

    return(
        <>
        <Navbar buttons={estado}/>
        <div className="flex justify-center z-0 mt-10">
            <div className="h-[90%] w-[95%] sm:w-[95%] bg-[#DECBA4] my-10 rounded-2xl">
                <div className="mt-10 text-xl">                
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Visualizar {datas.title}</h2>                                                        
                    <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 p-5 w-[90%] mx-auto">                
                        {
                            datas.values.map(data=>{
                                return(

                                    <Data keys={data.keys} value={data.value}/>
                                )
                            })    
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Visualizar;