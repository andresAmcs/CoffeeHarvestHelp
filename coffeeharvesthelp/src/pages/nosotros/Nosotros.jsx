import React from "react";

import Card from "../../components/nosotros/Card";

function Nosotros() {
    
    return (
        <div>
            <Card img="./imgs/Andres.jpg" facebook="https://es-la.facebook.com/" instagram="https://www.instagram.com/" email="https://www.google.com/intl/es-419/gmail/about/" nombre="Andres Mauricio Cifuentes" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <Card img="./imgs/Prueba.jpg" facebook="https://es-la.facebook.com/" instagram="https://www.instagram.com/" email="https://www.google.com/intl/es-419/gmail/about/" nombre="Daniel Gonzalez Ceballos" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <Card img="./imgs/Prueba.jpg" facebook="https://es-la.facebook.com/" instagram="https://www.instagram.com/" email="https://www.google.com/intl/es-419/gmail/about/" nombre="Simón Toro Cuervo" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
        </div>
    )
}

export default Nosotros;