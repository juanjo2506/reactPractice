import React from 'react';
import PropTypes from "prop-types"
import "./Pelicula.css"

function Pelicula(props) {
   /*  let rating = 4 */
    let generos = ["Accion", "Drama"]
    let listadoDeGeneros;
    if (props.generos !=null) {
            listadoDeGeneros = 
        <ul>
                {props.generos.map(function(genero,i) {
                    return <li key={genero + i}> {genero}</li>
                    
                })}
            </ul>
    }else{
      listadoDeGeneros = "No hay genero bro";
    }
    return (
        <div >
            <h2 className='son'>{props.titulo}</h2>
            <p>rating: {props.ratig < 6? "Bad " + props.rating : "nice "+ props.rating}</p>
            {listadoDeGeneros}
</div>
    );
  }
 Pelicula.defaultProps ={
    rating : "Esta peli aun no fue puntuada",
    generos : null,
 }
 Pelicula.propTypes ={
    rating : PropTypes.number,
/*     generos :PropTypes.string, */
 }
export default Pelicula;