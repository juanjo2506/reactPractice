import React from 'react';



function ContenedorPublicidad(props) {
    return (
        <div >
             
        <p>
            Hay algo mas
        </p>
        <p>
        {props.children}
        </p>
</div>
    );
  }

export default ContenedorPublicidad;