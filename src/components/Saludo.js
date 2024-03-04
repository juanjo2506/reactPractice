import React from 'react';

function Saludo(props) {
   /*  let rating = 4 */
    let generos = ["Accion", "Drama"]
    return (
        <div>

       <h1>{props.titulo}</h1>

       <h1>{props.subtitulo}</h1>

   </div>
    );
  }

  export default Saludo;
