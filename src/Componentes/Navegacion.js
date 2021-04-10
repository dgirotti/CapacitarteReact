import React from 'react';

function Navegacion() {
  return (
    <nav class="nav">
      <a class="nav-link active" aria-current="page" href="https://www.google.com/?hl=es">Google</a>
      <a class="nav-link" href="https://www.mdzol.com/">Mdz</a>
      <a class="nav-link" href="https://www.ole.com.ar">Ole</a>
      <a class="nav-link" href="https://www.elsol.com.ar">El Sol</a>
    </nav>
  );
}  /* codigo de bootstrap traido para ser usado en nuestra pagina. En el index.html pongo las anclas de codigo bootstrap para que pueda ser leido y usado correctamente */

export default Navegacion;