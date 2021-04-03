import React from 'react';

function Navegacion(){
    return(
      <nav class="nav">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
      <a class="nav-link" href="#">Diego</a>
      <a class="nav-link" href="#">Girotti</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </nav>
    );
    }  /* codigo de bootstrap traido para ser usado en nuestra pagina. En el index.html pongo las anclas de codigo bootstrap para que pueda ser leido y usado correctamente */

export default Navegacion;