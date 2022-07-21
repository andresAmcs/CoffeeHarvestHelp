import React from "react";
import imgAndres from "../assets/imgs/Andres.jpg"
import imgDaniel from "../assets/imgs/Daniel.jpeg"
import imgSimon from "../assets/imgs/Simon.jpeg"
import Card from "../componets/nosotros/Card";

function Nosotros() {
    
    return (
        <div>
            <Card img={imgAndres} Title="Andres Mauricio Cifuentes Silva" text="turip ip ip ip" facebook="https://www.facebook.com/profile.php?id=100076781030961" instagram="https://instagram.com/andres_gk35?igshid=YmMyMTA2M2Y=" email="andresamcs04@gmail.com" nombre="Andres Mauricio Cifuentes" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <Card img={imgDaniel} Title="Daniel Gonzalez Ceballos" text="turip ip ip ip" facebook="https://www.facebook.com/groups/313516073615605" instagram="https://www.instagram.com/daniel_g099/" email="dgonzalez9495@misena.edu.co" nombre="Daniel Gonzalez Ceballos" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
            <Card img={imgSimon} Title="Simon Toro Cuervo" text="turip ip ip ip" facebook="https://www.facebook.com/profile.php?id=100010678029352" instagram="https://www.instagram.com/alpensor/" email="simontoro925@gmail.com" nombre="Simón Toro Cuervo" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."/>
        </div>
    )
}

export default Nosotros;