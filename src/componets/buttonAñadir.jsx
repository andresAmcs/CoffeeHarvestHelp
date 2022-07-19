function ButtonAgregar ({link="#", name, style}){
    return(
    <div className="mb-10">
      <a className="bg-amber-600 hover:bg-amber-800 transition-colors cursos-pointer uppercase font-bold pl-6 p-3 text-white rounded-lg flex mx-auto max-w-[20%] text-center"
        href={link}>{name}</a>      
    </div>
    )
}

export default ButtonAgregar