import Router from "../Router/Router";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Start from '../../Assets/img/Icono/objeto_destino_entrelazado.png';
import "./App.css";


function App() {

  const [click, setClick] = useState(false)
  const [encima, setEncima] = useState(false)

  const onda = useSpring({
    from: { opacity: 1, border: click ? "25px solid rgb(212,175,55)" : "0px solid rgb(212,175,55)", transform: click ? "scale(1)" : "scale(1)" },
    to: { opacity: click ? 0 : 1, border: click ? "0px solid rgb(212,175,55)" : "0px solid rgb(212,175,55)", transform: click ? "scale(2)" : "scale(1)" },
    config: { config: config.slow }
  })

  const encimaOver = useSpring({
    from: { border: encima ? "0px solid rgb(212,175,55)" : "3px solid rgb(212,175,55)", backgroundColor: encima ? "rgb(255,255,255)" : "rgb(255,245,191)" },
    to: { border: encima ? "3px solid rgb(212,175,55)" : "0px solid rgb(212,175,55)", backgroundColor: encima ? "rgb(255,245,191)" : "rgb(255,255,255)" },
    config: { config: config.gentle }
  })

  return (
    <div className="container-fluid">
      <div id="boton" className="position-absolute top-50 start-50 translate-middle">
        <animated.div style={onda} onClick={() => {
          setClick(true);
          setTimeout(function () {
            document.getElementById("boton").classList.add("d-none");
            document.getElementById("rutas").classList.remove("d-none");
          }, 1500)
        }} className="rounded-circle">
          <animated.div style={encimaOver} onMouseOver={() => { setEncima(true) }} onMouseOut={() => { setEncima(false) }} className="rounded-circle">
            <img className="img-fluid" src={Start} alt="start" />
          </animated.div>
        </animated.div>
      </div>
      <div id="rutas" className="d-none">
        <Router />
      </div>
    </div>
  );
}

export default App;
