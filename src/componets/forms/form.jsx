import React from 'react';

import { useFormik } from 'formik';

import * as Yup from 'yup';


function Formulario() {

  const formik = useFormik({

    initialValues: {
        document: '',
    },

    validationSchema: Yup.object({

        document: Yup.string()

            .min(5,"Debe tener mas de 5 caracteres")
            .max(15, 'No puede tener mas de 15 Caracteres')

            .required('Debe ingresar un documento'),

        password: Yup.string()

            .required("Debe de ingresar la clave")

    }),

    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

      console.log("hola")

    },

  });

  return (

    <form onSubmit={formik.handleSubmit}>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="document">
                Documento
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="document"

                    name="document"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.document}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.document && formik.errors.document ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.document}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="password">
                Contraseña
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="password"

                    name="password"

                    type="password"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.password}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.password && formik.errors.password ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.password}</div>

                ) : null}
        </div>

      <button className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5' type="submit">Submit</button>

    </form>

  );

};

export default Formulario