import React from "react";
import imgAndres from "./../assets/imgs/Andres.jpg"
import imgDaniel from "./../assets/imgs/Daniel.jpg"
import imgSimon from "./../assets/imgs/Simon.jpeg"
import Card from "./../componets/nosotros/Card";

function Nosotros() {
    
    return (
        <div>
            <Card img={imgAndres} Title="Andres Mauricio Cifuentes Silva" text="turip ip ip ip" facebook="https://es-la.facebook.com/" instagram="https://www.instagram.com/" email="https://www.google.com/intl/es-419/gmail/about/" nombre="Andres Mauricio Cifuentes" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <Card img={imgDaniel} Title="Daniel Gonzalez Ceballos" text="turip ip ip ip" facebook="https://es-la.facebook.com/" instagram="https://www.instagram.com/" email="https://www.google.com/intl/es-419/gmail/about/" nombre="Daniel Gonzalez Ceballos" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <Card img={imgSimon} Title="Simon Toro Cuervo" text="turip ip ip ip" facebook="https://es-la.facebook.com/" instagram="https://www.instagram.com/" email="https://www.google.com/intl/es-419/gmail/about/" nombre="Simón Toro Cuervo" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
        </div>
    )
}

export default Nosotros;