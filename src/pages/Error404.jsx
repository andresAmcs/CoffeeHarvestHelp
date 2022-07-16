import React from "react";
import { NavLink } from "react-router-dom"
import Card from "./../componets/nosotros/Card";
import ImgError from "./../assets/imgs/imgError.png"

function Error404() {

    return (
        <Card img={ImgError} color="900"/>
    )
}

export default Error404;