function Button ({link="#", name, style}){
    return(
    
      <a className="px-4 py-2 mt-2 mx-3 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:bg-[#ffffff42] dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-[#0000002d]"
        href={link}>{name}</a>      

    )
}

export default Button