import React from "react";
import Grafica from "../../components/grafica/Grafica"

function Home(props) {


    return (
        <div className="flex justify-center">
            <div className="h-[95%] w-[95%] bg-white mt-10 mb-10 rounded-2xl ">
                <div className="md:bg-white  rounded-lg shadow-xl lg:my-5 w-[100%] lg:bg-white lg:p-4 lg:w-[75%] lg:mx-auto">
                    <h2 className=" font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Balances</h2>

                    <div className="w-12/12 flex mt-10 ">
                        <div className="rounded-lg overflow-hidden  w-[90%] mx-auto">
                                
                            <div className="mt-5">
                                <Grafica titulo="Balance General Ingresos Fincas"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;