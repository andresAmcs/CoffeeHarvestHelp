import React from "react";

function Home(props) {
    

    return(
        <div class="flex justify-center">
            <div class="h-[90%] w-[80%] bg-neutral-300 mt-10 mb-10 rounded-2xl">                
                <div class="md:bg-white p-6 rounded-lg shadow-xl py-10 ">                                        
                    <h2 class=" font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Balances</h2>                                             
                    
                    <div class="w-12/12 flex mt-10">
                        <div class="w-3/12">
                            <div class="bg-orange-400 border border-stone-900" height="300px" weight="50px">                       
                                <div class="p-2">
                                    <label class="mb-2 block uppercase text-gray-800 font-bold" for="username">
                                        Registro Fincas
                                    </label>
                                </div>

                                <hr/>

                                <div class="p-2">
                                    <label class="mb-2 block uppercase text-gray-800 font-bold" for="username">
                                        Ingresos Totales
                                    </label>
                                    <div class="flex">
                                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                            <i class="fa-solid fa-money-bill-trend-up"></i>
                                        </span>
                                        <input type="number" id="website-admin" disabled value="929898" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:border-gray-600 0" placeholder=""/>
                                    </div>
                                </div>

                                <div class="p-2">
                                    <label class="mb-2 block uppercase text-gray-800 font-bold" for="username">
                                        Gastos Totales
                                    </label>
                                    <div class="flex">
                                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                            <i class="fa-solid fa-money-bill-transfer"></i>
                                        </span>
                                        <input type="number" id="website-admin" disabled value="929898" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:border-gray-600 0" placeholder=""/>
                                    </div>
                                </div>

                                <div class="p-2">
                                    <label class="mb-2 block uppercase text-gray-800 font-bold" for="username">
                                        Ganancia Total
                                    </label>
                                    <div class="flex">
                                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                            <i class="fa-solid fa-sack-dollar"></i>
                                        </span>
                                        <input type="number" id="website-admin" disabled value="929898" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:border-gray-600 0" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-9/12 border border-stone-900">
                            <canvas id="Fincas" width="273" height="90"></canvas>
                        </div>
                    </div>                    
                </div>                
            </div> 
        </div>
    );
}
export default Home;