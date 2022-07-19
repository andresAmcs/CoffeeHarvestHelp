import React from 'react';

import { useFormik, yupToFormErrors } from 'formik';

import { useState } from 'react';

import * as Yup from 'yup';

import { Toaster, toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { createUser } from "../../../helpers/fetch"


function RegistrarEmpleado() {


    const [users, setUsers] = useState();

    const navigate=useNavigate()

  const formik = useFormik({

    initialValues: {
        nombre:"",
        genero:"",    
        contrasena:"",
        contrasena2:"",
        correo:"",
        sueldo:"",
        rolId:"",
    },

    validationSchema: Yup.object({

        nombre: Yup.string()

            .min(3,"Debe tener mas de 3 caracteres")
            .max(50, 'No puede tener mas de 50 Caracteres')

            .required('Debe ingresar un nombre'),

        genero: Yup.string()

            .required("Debe de ingresar un valor"),
        
        contrasena: Yup.string()
        
            .required("Debe de ingresar una contraseña"),

        
        correo: Yup.string()

            .email("Debe ingresar un correo")
            .required("Debe ingresar un correo"),
        
        sueldo: Yup.number()

            .min(0,"Debe ingresar un valor")
        ,
        rolId: Yup.string()

            .required("Debe de seleccionar un valor")
    }),

    onSubmit:values => {

      alert(JSON.stringify(values, null, 2));

        let nombre=values.nombre
        let genero=values.genero
        let contrasena=values.contrasena
        let correo=values.correo
        let sueldo=values.sueldo
        let rolId=values.rolId

        if(values.contrasena==values.contrasena2){


            createUser({nombre,genero,contrasena,correo,sueldo,rolId})
            navigate("/login")
        }else{
            toast("Las contraseñas no coinciden")
        }

    },

  });

  return (

    

    <div className="md:w-[80%] md:m-auto md:my-10 2xl:w-1/2 bg-[#ffffff43] p-6 rounded-lg shadow-xl py-10 mt-10 mx-2 ">
        <Toaster/>
        <div className="w-100% text-center">
            <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-amber-600">Añadir Empleado</h2>
        </div>
    <form onSubmit={formik.handleSubmit}>
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="nombre">
                Nombre Completo
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="nombre"

                    name="nombre"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.nombre}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.nombre && formik.errors.nombre ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.nombre}</div>

                ) : null}
        </div>

            
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="genero">
                Genero
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <select

                    id="genero"

                    name="genero"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.genero}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >

                    <option value="">
                        Seleccione
                    </option>
                    <option value="masculino">
                        Masculino
                    </option>
                    <option value="femenino">
                        Femenino
                    </option>
                    <option value="O">
                        Otro
                    </option>

                </select>

            </div>
            {formik.touched.genero && formik.errors.genero ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.genero}</div>

                ) : null}
        </div>
        

        
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="contrasena">
                Contraseña
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="contrasena"

                    name="contrasena"

                    type="password"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.contrasena}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.contrasena && formik.errors.contrasena ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.contrasena}</div>

                ) : null}
        </div>

        
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="contrasena2">
                Confirmar Contraseña
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="contrasena2"

                    name="contrasena2"

                    type="password"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.contrasena2}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.contrasena2 && formik.errors.contrasena2 ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.contrasena2}</div>

                ) : null}
        </div>


        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="correo">
                Correo 
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="correo"

                    name="correo"

                    type="email"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.correo}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.correo && formik.errors.correo ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.correo}</div>

                ) : null}
        </div>


    

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="sueldo">
                Sueldo
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="sueldo"

                    name="sueldo"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.sueldo}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.sueldo && formik.errors.sueldo ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.sueldo}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="rolId">
                Rol
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <select

                    id="rolId"

                    name="rolId"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.rolId}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >

                    <option value="">
                        Seleccione
                    </option>
                    <option value="1">
                        Administrador Finca
                    </option>
                    <option value="2">
                        Administrador Asprocafe
                    </option>

                </select>

            </div>
            {formik.touched.rolId && formik.errors.rolId ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.rolId}</div>

                ) : null}
        </div>

      <button className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5' type="submit">Submit</button>

    </form>
</div>
  );

};



export default RegistrarEmpleado    