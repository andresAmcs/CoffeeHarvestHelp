import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Toaster, toast} from "react-hot-toast"


function SingIn(props) {
    const formik = useFormik({

        initialValues: {
            nombre: '',
            document: '',
            genero: '',
            correo: '',
            rol: '',
            contraseña: '',
        },
    
        validationSchema: Yup.object({
    
            nombre: Yup.string()                    
                .required('Debe ingresar su nombre')
                .min(5,'Debe ingresar un nombre valido'),
            documento: Yup.string()    
                .required("Debe ingresar su documento")
                .min(6,'Ingrese un documento valido'),
            genero: Yup.string()                    
                .required("Debe seleccioner una opción"),
            correo: Yup.string()                    
                .required('Debe ingresar su correo')
                .min(10,'Debe ingresar un correo valido'),
            rol: Yup.number()                    
                .required('Debe seleccionar un rol'),
            contraseña: Yup.string()                    
                .required('Debe ingresar una contraseña')
                .min(8,'La contraseña debe tener minimo 8 caracteres')
                .max(20,'La contraseña no puede tener mas de 20 caracteres')    
        }),
    
        onSubmit: values => {
    
          alert(JSON.stringify(values, null, 2));
          toast("Actividad Registrada")
    
        },
    
      });

    return (        
            
    <div className="md:w-[80%] md:m-auto md:my-10 2xl:w-1/2 bg-[#ffffff43] p-6 rounded-lg shadow-xl py-10 mt-10 mx-2 ">
        <Toaster/>
                    <div className="w-100% text-center">
                        <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-amber-600">Registrarse</h2>
                    </div>
        <form onSubmit={formik.handleSubmit}>
    
            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="nombre">
                    Fecha
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
    
            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="documento">
                    Lote
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-key`}></i>
                    </span>
                    
    
                    <input
    
                        id="documento"    
                        name="documento"    
                        type="text"    
                        onChange={formik.handleChange}    
                        onBlur={formik.handleBlur}    
                        value={formik.values.documento}    
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
    
                    />
    
                </div>
                {formik.touched.documento && formik.errors.documento ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.documento}</div>    
                    ) : null}
            </div>
                        
            <div className="my-5 mx-auto w-100% ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="genero">
                    Genero
            </label>
            <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-key`}></i>
                    </span>
            <select
                id="genero"
                name="genero"
                value={formik.values.genero}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ display: "block" }}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            >
                <option value="" label="Select un genero">
                Seleccione un genero{" "}
                </option>
                <option value="masculino" label="masculino">
                {" "}
                Masculino
                </option>
                <option value="femenino" label="femenino">
                Femenino
                </option>        
                <option value="otro" label="otro">
                Otro
                </option>
            </select>
            </div>            
                {formik.touched.genero && formik.errors.genero ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.genero}</div>    
                    ) : null}
            </div>            

            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="correo">
                    Correo
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-home`}></i>
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

            <div className="my-5 mx-auto w-100% ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="rol">
                    Rol
            </label>
            <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-key`}></i>
                    </span>
            <select
                id="rol"
                name="rol"
                value={formik.values.rol}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ display: "block" }}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            >
                <option value="" label="Seleccione un rol">
                Seleccione un rol{" "}
                </option>
                <option value="1" label="Administrador Asprocafe">
                {" "}
                Administrador Asprocafe
                </option>
                <option value="2" label="Administrador Finca">
                Administrador Finca
                </option>                        
            </select>
            </div>            
                {formik.touched.rol && formik.errors.rol ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.rol}</div>    
                    ) : null}
            </div>         

            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="contraseña">
                    Contraseña
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-home`}></i>
                    </span>
                        
                    <input
    
                        id="contraseña"    
                        name="contraseña"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contraseña}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    />
    
                </div>
                {formik.touched.contraseña && formik.errors.contraseña ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.contraseña}</div>    
                    ) : null}
            </div>            
            <input type="submit" value="Registrarme" className="bg-amber-600 hover:bg-amber-800 transition-colors cursos-pointer uppercase font-bold w-full p-3 text-white rounded-lg" />    
        </form>                                        
                </div>    
      );
}

export default SingIn