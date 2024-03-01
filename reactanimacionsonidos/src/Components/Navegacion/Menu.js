import React, { Component, useState } from "react";

//importamos el react Spring
import { useSpring, config, animated } from 'react-spring';
//importaremos react Howler
import ReactHowler from 'react-howler'

import { Link } from "react-router-dom";
import Global from "../../Global";
import axios from "axios";

//importamos las imagenes
import anemoImg from "../../Assets/img/visiones/anemo.png";
import pyroImg from "../../Assets/img/visiones/pyro.png";
import cryoImg from "../../Assets/img/visiones/cryo.png";
import hydroImg from "../../Assets/img/visiones/hydro.png";
import dendroImg from "../../Assets/img/visiones/dendro.png";
import electroImg from "../../Assets/img/visiones/electro.png";
import geoImg from "../../Assets/img/visiones/geo.png";

//importamos los sonidos
import sonidoEncima from '../../Assets/sound/efectoEncima.ogg'

//creamos la funcion OpcionMenu, en donde, ademas de crear 
//los LI de la lista de rutas, añadiremos una animacion con Spring
function OpcionMenu(props) {

  //al ser una funcion, debemos añadir los props y el estado
  const { obj, index, imagen } = props;
  const [opcion, setOpcion] = useState(false)

  //Aqui haremos dos tipos de animaciones:

  //Aqui creamos la animacion que modificara la altura de los LI, 
  //ademas de configurarlo mediante la masa, tension y fricción

  const animacion = useSpring({
    from: { height: opcion ? "130px" : "150px", backgroundColor: imagen.backgroundColor },
    to: { height: opcion ? "150px" : "130px" },
    config: { mass: 1, tension: 120, friction: 14 }
  });

  //Aqui creamos la animacion modificando una propiedad css y usaremos "config" el cual 
  //nos proporciona configuraciones predeterminadas que se pueden ver en la pagina oficial

  const { opacity } = useSpring({
    opacity: opcion ? "1" : "0",
    config: { config: config.default }
  })

  return (
    //se coloca "animated" para decirle a Spring donde habrá una animacion, y colocaremos la animacion en el atributo style 
    //con solo una llave. Tambien ponemos eventos de Raton para cambiar el estado y asi cambiar la animacion 

    <animated.li
      onMouseOver={() => { setOpcion(true) }}
      onMouseOut={() => { setOpcion(false) }}
      style={animacion}
      key={index}
      className="nav-item btn mx-2"
    >
      <ReactHowler src={sonidoEncima} playing={opcion} />

      <Link to={"/elemento/" + obj} className="nav-link">
        <img
          src={imagen.img}
          alt={obj}
          width="100px"
        />

        <animated.div
          style={{ opacity, color: imagen.colorText }}
          className="row pt-2 text-center">
          <b>{obj}</b>
        </animated.div>

      </Link>
    </animated.li>
  )
}




export default class Menu extends Component {


  state = {
    elementos: [],
    imagenes: [
      { img: anemoImg, backgroundColor: "rgb(186,245,223)", colorText: "rgb(6,144,110)" },
      { img: cryoImg, backgroundColor: "rgb(190,234,233)", colorText: "rgb(27,154,156)" },
      { img: dendroImg, backgroundColor: "rgb(191,210,135)", colorText: "rgb(5,150,5)" },
      { img: electroImg, backgroundColor: "rgb(216,188,239)", colorText: "rgb(93,23,144)" },
      { img: geoImg, backgroundColor: "rgb(244,223,160)", colorText: "rgb(172,94,22)" },
      { img: hydroImg, backgroundColor: "rgb(160,232,237)", colorText: "rgb(12,100,140)" },
      { img: pyroImg, backgroundColor: "rgb(248,193,158)", colorText: "rgb(100,37,5)" },
    ],
    estado: false,
  };

  cargarElementosMenu() {
    var request = "elements";
    var url = Global.urlGenshin + request;
    axios.get(url).then((res) => {
      this.setState({
        elementos: res.data,
        estado: true,
      });
    });
  }

  componentDidMount = () => {
    this.cargarElementosMenu();
  };

  render() {
    if (this.state.estado === true) {
      return (
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          aria-label="Tenth navbar example"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample08"
              aria-controls="navbarsExample08"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample08"
            >
              <ul className="navbar-nav">
                {this.state.elementos.map((obj, index) => {
                  return (
                    <OpcionMenu key={index} obj={obj} index={index} imagen={this.state.imagenes[index]} />
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return <h1>Cargando Menu</h1>;
    }
  }
}
