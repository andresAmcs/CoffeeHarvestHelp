import React from "react";

function Icons({link="#",icon="home"}) {
    
    return(
        
        <a href={link} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-4">
            <i className={`fa-solid fa-${icon}`}></i>
        </a>

    )
}

export default Icons;