import React from 'react';

import { useFormik, yupToFormErrors } from 'formik';

import * as Yup from 'yup';

import { Toaster, toast } from "react-hot-toast";


function RegistrarEmpleado() {

  const formik = useFormik({

    initialValues: {
        documento: '',
        nombre:"",
        tipoPago:"",    
        pago:"",
        correo:"",
        genero:"",
    },

    validationSchema: Yup.object({

        documento: Yup.string()

            .min(5,"Debe tener mas de 5 caracteres")
            .max(15, 'No puede tener mas de 15 Caracteres')

            .required('Debe ingresar un documento'),

        nombre: Yup.string()

            .min(2,"Debe de tener mas de 2 caracteres")
            .max(50,"Debe tener menos de 50 caracteres")
            .required("Debe de ingresar un nombre"),
        
        tipoPago: Yup.string()
        
            .required("Debe de seleccionar un valor"),

        
        pago: Yup.number()

            .min(0,"Los valores no pueden ser negativos")
            .required("Debe ingresar un valor numerico"),
        
        correo: Yup.string()
        
            .email("Asegurese que sea un correo")
            .required("El correo es obligatorio"),
        
        genero: Yup.string()

            .required("Debe de seleccionar un valor")
    }),

    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

      toast("Empleado Registrado")

        

    },

  });

  return (

    

    <form onSubmit={formik.handleSubmit}>
        
        <Toaster/>


        <div className="my-5 mx-auto w-4/6 ">
            
            
            <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Registrar Empleado</h2>

            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="documento">
                Documento
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="documento"

                    name="documento"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.document}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.documento && formik.errors.documento ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.documento}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="nombre">
                Nombre
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
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="tipoPago">
                Tipo Pago
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <select

                    id="tipoPago"

                    name="tipoPago"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.tipoPago}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >

                    <option value="">
                        Seleccione
                    </option>
                    <option value="kilos" label="Por Kilo">
                        Por Kilos
                    </option>
                    <option value="fijo" label="Sueldo Fijo">
                        Sueldo Fijo
                    </option>
                    <option value="jornal" label="Jornal">
                        Jornal
                    </option>

                </select>

            </div>
            {formik.touched.tipoPago && formik.errors.tipoPago ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.tipoPago}</div>

                ) : null}
        </div>
        

        
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="pago">
                Pago
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="pago"

                    name="pago"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.pago}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.pago && formik.errors.pago ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.pago}</div>

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
                    <option value="F" label="F">
                        Femenino
                    </option>
                    <option value="M" label="M">
                        Masculino
                    </option>
                    <option value="O" label="Otro">
                        Otro
                    </option>

                </select>

            </div>
            {formik.touched.genero && formik.errors.genero ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.genero}</div>

                ) : null}
        </div>

      <button className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5' type="submit">Submit</button>

    </form>

  );

};



export default RegistrarEmpleado