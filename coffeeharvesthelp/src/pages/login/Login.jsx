import React from "react";
import Inputs from "../../components/logIn/Inputs";

function Login(props) {
    
    return(

        <div className="container mx-auto">
            <div className="md:flex md:gap-4 md:items-center">
                <div className="md:w-1/2 mt-2">
                    <img src="https://www.semana.com/resizer/rH4_rbif0fmvefux9P8yPeuPOhA=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/EMVX56K62JCS7J3BH2M4BA33RU.jpg" alt="imagen Registro de Usuarios" />
                </div> 
                <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-xl py-10 mt-10">
                    <div className="w-7">
                        <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">Coffee harvets help</h2>
                    </div>
                    <form action="#" method="POST">
                        <div className="mb-5">
                            <label className="mb-2 block uppercase text-gray-800 font-bold" htmlFor="username">
                                TELEFONO O CORREO
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <i className="fa-solid fa-user"></i>
                                </span>
                                <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:border-gray-600 0" placeholder="Telefono o Correo"/>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="mb-2 block uppercase text-gray-800 font-bold" htmlFor="password">
                                Contraseña
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <i className="fa-solid fa-key"></i>
                                </span>
                                <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:border-gray-600 0" placeholder="Contraseña"/>
                            </div>
                        </div>
                        <input type="submit" value="Iniciar Sesion" className="bg-sky-600 hover:bg-sky-700 transition-colors cursos-pointer uppercase font-bold w-full p-3 text-white rounded-lg"/>
                    </form>
                    <div className="mt-10">
                        <a href="#" className="text-blue-500 underline">¿Has olvidado tu contraseña?</a>
                    </div>
                    <div className="mt-5">
                        ¿No tienes una cuenta?<a href="#" className="text-blue-500 underline">Registrate</a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Login