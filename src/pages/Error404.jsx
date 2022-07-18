import React from "react";
import { NavLink } from "react-router-dom"
import Card from "./../componets/nosotros/Card";
import ImgError from "./../assets/imgs/imgError.png"

function Errores() {

    return (
        <Card img={ImgError} color="900"/>
    )
}

export default Errores;