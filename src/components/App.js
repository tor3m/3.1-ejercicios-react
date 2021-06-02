import React, { Component } from "react";
// import "../stylesheets/App.css";
import '../stylesheets/App.scss';
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";

class App extends Component {
  render() {
    return (
      <>
        <Exercise1 />
        {/* <Exercise3 /> */}
        {/* <Exercise1/> */}
        {/* OJO Hay que ir probando cambiando el Exercise2  por el 3 y el 1 */}
        {/* OJO Al principio los estilos estaban en App.css pero en el Ejercicio 4 piden pasarlo a Sass, por eso tengo comentado App.css, puedes probar a comentar App.scss y descomentar App.css y van a seguir funcionando los estilos. Para que funcione Sass hay que hacer un npm-install node-sass  */}
      </>
    );
  }
}

export default App;
