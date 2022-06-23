import React from "react";

function IndexButtons(props) {

    return (
        <td className="px-6 py-4 text-right">
            <a href={`/visualizar/${props.visualizar}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-4"><i className="fa-solid fa-eye"></i></a>
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-4"><i className="fa-solid fa-trash"></i></a>
            <a href={`/actualizar/${props.actualizar}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-4"><i className="fa-solid fa-pen"></i></a>
        </td>
    )
}

export default IndexButtons