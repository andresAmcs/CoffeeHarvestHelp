import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Login(props) {
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
        <div className="container mx-auto">
            <div className="md:flex gap-4 md:items-center">
                <div className="md:w-1/2 mt-2 sm:hidden md:hidden md:mx-auto lg:hidden xl:hidden 2xl:block hidden">
                    <img src="https://www.semana.com/resizer/rH4_rbif0fmvefux9P8yPeuPOhA=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/EMVX56K62JCS7J3BH2M4BA33RU.jpg" alt="imagen Registro de Usuarios" />
                </div>
                <div className="md:w-[80%] md:m-auto md:my-10 2xl:w-1/2 bg-white p-6 rounded-lg shadow-xl py-10 mt-10 mx-2 ">
                    <div className="w-7">
                        <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-amber-600">Coffee Harvets Help</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
    
            <div className="my-5 mx-auto w-100% ">
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
    
            <div className="my-5 mx-auto w-100% ">
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
            <input type="submit" value="Iniciar Sesion" className="bg-amber-600 hover:bg-amber-800 transition-colors cursos-pointer uppercase font-bold w-full p-3 text-white rounded-lg" />    
        </form>                    
                    <div className="mt-5">
                        ¿No tienes una cuenta?<a href="#" className="text-blue-500 underline">Registrate</a>
                    </div>
                </div>
            </div>
        </div>

        
    
      );
}

export default Login