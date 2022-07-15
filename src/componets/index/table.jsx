import Th from "./th";
import Button from "./icons";

function Table({datos}) {
    return(
        <>
            <table className="w-[92%] text-sm text-left text-gray-500 dark:text-gray-400 my-10 mx-auto  2xl:table xl:table">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <Th nombre="#"/>
                        {datos.head.map(dato=>{
                            return (
                                <Th nombre={dato}/>
                            )
                        })}
                        <Th nombre=""/>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        {
                            datos.body.map(dato=>{
                                return(
                                    <Th nombre={dato}/>
                                )
                            })
                        }

                        {
                            datos.buttons.map(button=>{
                                return(
                                    <Button link={button.link} icon={button.icon}/>
                                )
                            })
                        }
                    
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;