import React from 'react';

import { useFormik, yupToFormErrors } from 'formik';

import * as Yup from 'yup';

import { Toaster, toast } from "react-hot-toast";


function ActualizarFinca() {

  const formik = useFormik({

    initialValues: {
        nombre: '',
        tipo: '',
        ubicacion: '',
        colidantes: '',
        hectareas: '',
    },

    validationSchema: Yup.object({

        nombre: Yup.string()

            .min(5,"Debe tener mas de 5 caracteres")
            .max(15, 'No puede tener mas de 15 Caracteres')

            .required('Debe ingresar un documento'),

        tipo: Yup.string()

            .required("Debe de ingresar un valor"),

        ubicacion: Yup.string()

            .required("Debe ingresar un valor"),

        colidantes: Yup.number()
        
            .required("Debe de ingresar un valor"),
        
        hectareas: Yup.number()

            .positive("Debe ser un valor positivo")
            .required("Debe ingresar un valor numerico")
    }),

    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

      console.log("hola")

      toast("Finca Registrada")

    },

  });

  return (

    <form onSubmit={formik.handleSubmit}>

        <Toaster/>

        <div className="my-5 mx-auto w-4/6 ">

            <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">Actualizar Finca</h2>

            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="nombre">
                Nombre Finca
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
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="tipo">
                Tipo Finca
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <select

                    id="tipo"

                    name="tipo"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.tipo}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >    
                
                <option value="">
                    Seleccione
                </option>
                <option value="organica">
                    Organica
                </option>
                <option value="tecnificada">
                    Tecnificada
                </option>
                <option value="otro">
                    Otro
                </option>
                
                </select>

            </div>
            {formik.touched.tipo && formik.errors.tipo ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.tipo}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="ubicacion">
                Ubicacion Finca
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="ubicacion"

                    name="ubicacion"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.ubicacion}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.ubicacion && formik.errors.ubicacion ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.ubicacion}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="colindantes">
                Cantidad Colindantes
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="colindantes"

                    name="colindantes"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.colindantes}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.colidantes && formik.errors.colindantes ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.colindantes}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="hectareas">
                Total Hectareas 
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="hectareas"

                    name="hectareas"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.hectareas}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.hectareas && formik.errors.hectareas ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.hectareas}</div>

                ) : null}
        </div>

      <button className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5' type="submit">Submit</button>

    </form>

  );

};



export default ActualizarFinca