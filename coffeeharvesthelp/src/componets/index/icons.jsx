function Icons ({link, nameIcon}){
    return(
        <td className="px-6 py-4 text-right">
            <a href={link} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-4"><i className={`fa-solid fa-${nameIcon}`}></i></a>            
        </td>
    )
}

export default Icons