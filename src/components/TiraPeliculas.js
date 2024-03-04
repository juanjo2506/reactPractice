import React from 'react';
import Pelicula from "./Pelicula"


function TiraPeliculas() {
    return (
        <div >
             <Pelicula generos = {["fantasia"]} rating={7.0} titulo="Harry Potter"/>
             <Pelicula generos = {["fantasia", "animacion"]}  rating={7.0}  titulo="Toy Story"/>
             <Pelicula generos = {["fantasia", "Ciencia ficcion"]} rating={10} titulo="Avatar"/>
             <Pelicula generos = {["Ciencia ficcion"]} rating={10.0} titulo="Dragon ball"/>
             <Pelicula generos = {["fantasia", "Ciencia ficcion"]} rating={10.0} titulo="One piece"/>
             <Pelicula generos = {["fantasia", "Ciencia ficcion"]} rating={10.0} titulo="Gow"/>
         
</div>
    );
  }

export default TiraPeliculas;