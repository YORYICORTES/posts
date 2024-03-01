import { useSpring, animated } from "react-spring";
import React, { Component, useState } from "react";

//importaremos react Howler
import ReactHowler from 'react-howler'

//imagenes de personajes
import AlbedoImg from "../../Assets/img/personajes/Albedo.png";
import AloyImg from "../../Assets/img/personajes/Aloy.png";
import AmberImg from "../../Assets/img/personajes/Amber.png";
import BaizhuImg from "../../Assets/img/personajes/Baizhu.png";
import BarbaraImg from "../../Assets/img/personajes/Barbara.png";
import BeidouImg from "../../Assets/img/personajes/Beidou.png";
import BennettImg from "../../Assets/img/personajes/Bennett.png";
import ChongyunImg from "../../Assets/img/personajes/Chongyun.png";
import DilucImg from "../../Assets/img/personajes/Diluc.png";
import DionaImg from "../../Assets/img/personajes/Diona.png";
import EulaImg from "../../Assets/img/personajes/Eula.png";
import FischlImg from "../../Assets/img/personajes/Fischl.png";
import HuTaoImg from "../../Assets/img/personajes/Hu Tao.png";
import JeanImg from "../../Assets/img/personajes/Jean.png";
import KaedeharaKazuhaImg from "../../Assets/img/personajes/Kaedehara Kazuha.png";
import KaeyaImg from "../../Assets/img/personajes/Kaeya.png";
import KamisatoAyakaImg from "../../Assets/img/personajes/Kamisato Ayaka.png";
import KeqingImg from "../../Assets/img/personajes/Keqing.png";
import KleeImg from "../../Assets/img/personajes/Klee.png";
import KujouSaraImg from "../../Assets/img/personajes/Kujou Sara.png";
import LisaImg from "../../Assets/img/personajes/Lisa.png";
import MonaImg from "../../Assets/img/personajes/Mona.png";
import NingguangImg from "../../Assets/img/personajes/Ningguang.png";
import NoelleImg from "../../Assets/img/personajes/Noelle.png";
import QiqiImg from "../../Assets/img/personajes/Qiqi.png";
import RaidenShogunImg from "../../Assets/img/personajes/Raiden Shogun.png";
import RazorImg from "../../Assets/img/personajes/Razor.png";
import RosariaImg from "../../Assets/img/personajes/Rosaria.png";
import SacarosaImg from "../../Assets/img/personajes/Sacarosa.png";
import SangonomiyaKokomiImg from "../../Assets/img/personajes/Sangonomiya Kokomi.png";
import SayuImg from "../../Assets/img/personajes/Sayu.png";
import TartagliaImg from "../../Assets/img/personajes/Tartaglia.png";
import ThomaImg from "../../Assets/img/personajes/Thoma.png";
import VentiImg from "../../Assets/img/personajes/Venti.png";
import XianglingImg from "../../Assets/img/personajes/Xiangling.png";
import XiaoImg from "../../Assets/img/personajes/Xiao.png";
import XingqiuImg from "../../Assets/img/personajes/Xingqiu.png";
import XinyanImg from "../../Assets/img/personajes/Xinyan.png";
import YanfeiImg from "../../Assets/img/personajes/Yanfei.png";
import YoimiyaImg from "../../Assets/img/personajes/Yoimiya.png";
import ZhongliImg from "../../Assets/img/personajes/Zhongli.png";

//importamos los sonidos
import sonidoCarta from '../../Assets/sound/flipCard.ogg'

export default class Elemento extends Component {
  state = {
    seleccionados: [],
    estado: false,
    personajes: [
      {
        nombre: "Albedo",
        elemento: "Geo",
        ciudad: "Mondstadt",
        arma: "Espada",
        estrellas: 5,
        imagen: AlbedoImg,
      },
      {
        nombre: "Aloy",
        elemento: "Cryo",
        ciudad: "Horizon Zero Dawn",
        arma: "Arco",
        estrellas: 5,
        imagen: AloyImg,
      },
      {
        nombre: "Amber",
        elemento: "Pyro",
        ciudad: "Mondstadt",
        arma: "Arco",
        estrellas: 4,
        imagen: AmberImg,
      },
      {
        nombre: "Baizhu",
        elemento: "Dendro",
        ciudad: "Liyue",
        arma: "Desconocido",
        estrellas: 5,
        imagen: BaizhuImg,
      },
      {
        nombre: "Barbara",
        elemento: "Hydro",
        ciudad: "Mondstadt",
        arma: "Catalizador",
        estrellas: 4,
        imagen: BarbaraImg,
      },
      {
        nombre: "Beidou",
        elemento: "Electro",
        ciudad: "Liyue",
        arma: "Mandoble",
        estrellas: 4,
        imagen: BeidouImg,
      },
      {
        nombre: "Bennett",
        elemento: "Pyro",
        ciudad: "Mondstadt",
        arma: "Espada",
        estrellas: 4,
        imagen: BennettImg,
      },
      {
        nombre: "Chongyun",
        elemento: "Cryo",
        ciudad: "Liyue",
        arma: "Mandoble",
        estrellas: 4,
        imagen: ChongyunImg,
      },
      {
        nombre: "Diluc",
        elemento: "Pyro",
        ciudad: "Mondstadt",
        arma: "Mandoble",
        estrellas: 5,
        imagen: DilucImg,
      },
      {
        nombre: "Diona",
        elemento: "Cryo",
        ciudad: "Mondstadt",
        arma: "Arco",
        estrellas: 4,
        imagen: DionaImg,
      },
      {
        nombre: "Eula",
        elemento: "Cryo",
        ciudad: "Mondstadt",
        arma: "Mandoble",
        estrellas: 5,
        imagen: EulaImg,
      },
      {
        nombre: "Fischl",
        elemento: "Electro",
        ciudad: "Mondstadt",
        arma: "Arco",
        estrellas: 4,
        imagen: FischlImg,
      },
      {
        nombre: "Hu Tao",
        elemento: "Pyro",
        ciudad: "Liyue",
        arma: "Lanza",
        estrellas: 5,
        imagen: HuTaoImg,
      },
      {
        nombre: "Jean",
        elemento: "Anemo",
        ciudad: "Mondstadt",
        arma: "Espada",
        estrellas: 5,
        imagen: JeanImg,
      },
      {
        nombre: "Kaedehara Kazuha",
        elemento: "Anemo",
        ciudad: "Inazuma",
        arma: "Espada",
        estrellas: 5,
        imagen: KaedeharaKazuhaImg,
      },
      {
        nombre: "Kaeya",
        elemento: "Cryo",
        ciudad: "Mondstadt",
        arma: "Espada",
        estrellas: 4,
        imagen: KaeyaImg,
      },
      {
        nombre: "Kamisato Ayaka",
        elemento: "Cryo",
        ciudad: "Inazuma",
        arma: "Espada",
        estrellas: 5,
        imagen: KamisatoAyakaImg,
      },
      {
        nombre: "Keqing",
        elemento: "Electro",
        ciudad: "Liyue",
        arma: "Espada",
        estrellas: 5,
        imagen: KeqingImg,
      },
      {
        nombre: "Klee",
        elemento: "Pyro",
        ciudad: "Mondstadt",
        arma: "Catalizador",
        estrellas: 5,
        imagen: KleeImg,
      },
      {
        nombre: "Kujou Sara",
        elemento: "Electro",
        ciudad: "Inazuma",
        arma: "Arco",
        estrellas: 5,
        imagen: KujouSaraImg,
      },
      {
        nombre: "Lisa",
        elemento: "Electro",
        ciudad: "Mondstadt",
        arma: "Catalizador",
        estrellas: 4,
        imagen: LisaImg,
      },
      {
        nombre: "Mona",
        elemento: "Hydro",
        ciudad: "Mondstadt",
        arma: "Catalizador",
        estrellas: 5,
        imagen: MonaImg,
      },
      {
        nombre: "Ningguang",
        elemento: "Geo",
        ciudad: "Liyue",
        arma: "Catalizador",
        estrellas: 4,
        imagen: NingguangImg,
      },
      {
        nombre: "Noelle",
        elemento: "Geo",
        ciudad: "Mondstadt",
        arma: "Mandoble",
        estrellas: 4,
        imagen: NoelleImg,
      },
      {
        nombre: "Qiqi",
        elemento: "Cryo",
        ciudad: "Liyue",
        arma: "Espada",
        estrellas: 5,
        imagen: QiqiImg,
      },
      {
        nombre: "Raiden Shogun",
        elemento: "Electro",
        ciudad: "Inazuma",
        arma: "Lanza",
        estrellas: 5,
        imagen: RaidenShogunImg,
      },
      {
        nombre: "Razor",
        elemento: "Electro",
        ciudad: "Mondstadt",
        arma: "Mandoble",
        estrellas: 4,
        imagen: RazorImg,
      },
      {
        nombre: "Rosaria",
        elemento: "Cryo",
        ciudad: "Mondstadt",
        arma: "Lanza",
        estrellas: 4,
        imagen: RosariaImg,
      },
      {
        nombre: "Sacarosa",
        elemento: "Anemo",
        ciudad: "Mondstadt",
        arma: "Catalizador",
        estrellas: 4,
        imagen: SacarosaImg,
      },
      {
        nombre: "Sangonomiya Kokomi",
        elemento: "Hydro",
        ciudad: "Inazuma",
        arma: "Catalizador",
        estrellas: 5,
        imagen: SangonomiyaKokomiImg,
      },
      {
        nombre: "Sayu",
        elemento: "Anemo",
        ciudad: "Inazuma",
        arma: "Mandoble",
        estrellas: 4,
        imagen: SayuImg,
      },
      {
        nombre: "Tartaglia",
        elemento: "Hydro",
        ciudad: "Snezhnaya",
        arma: "Arco",
        estrellas: 5,
        imagen: TartagliaImg,
      },
      {
        nombre: "Thoma",
        elemento: "Pyro",
        ciudad: "Inazuma",
        arma: "Lanza",
        estrellas: 4,
        imagen: ThomaImg,
      },
      {
        nombre: "Venti",
        elemento: "Anemo",
        ciudad: "Mondstadt",
        arma: "Arco",
        estrellas: 5,
        imagen: VentiImg,
      },
      {
        nombre: "Xiangling",
        elemento: "Pyro",
        ciudad: "Liyue",
        arma: "Lanza",
        estrellas: 4,
        imagen: XianglingImg,
      },
      {
        nombre: "Xiao",
        elemento: "Anemo",
        ciudad: "Liyue",
        arma: "Lanza",
        estrellas: 5,
        imagen: XiaoImg,
      },
      {
        nombre: "Xingqiu",
        elemento: "Hydro",
        ciudad: "Liyue",
        arma: "Espada",
        estrellas: 4,
        imagen: XingqiuImg,
      },
      {
        nombre: "Xinyan",
        elemento: "Pyro",
        ciudad: "Liyue",
        arma: "Mandoble",
        estrellas: 4,
        imagen: XinyanImg,
      },
      {
        nombre: "Yanfei",
        elemento: "Pyro",
        ciudad: "Liyue",
        arma: "Catalizador",
        estrellas: 4,
        imagen: YanfeiImg,
      },
      {
        nombre: "Yoimiya",
        elemento: "Pyro",
        ciudad: "Inazuma",
        arma: "Arco",
        estrellas: 5,
        imagen: YoimiyaImg,
      },
      {
        nombre: "Zhongli",
        elemento: "Geo",
        ciudad: "Liyue",
        arma: "Lanza",
        estrellas: 5,
        imagen: ZhongliImg,
      },
    ],
  };

  seleccionarPersonajes() {
    let personajesSeleccionados = [];
    for (let i = 0; i < this.state.personajes.length; i++) {
      if (
        this.state.personajes[i].elemento.toLowerCase() === this.props.vision
      ) {
        personajesSeleccionados.push(this.state.personajes[i]);
      }
    }
    this.setState({
      estado: true,
      seleccionados: personajesSeleccionados,
    });
  }

  //cargaremos los datos de los personajes seleccionados despues de hacer un render del componente
  componentDidMount = () => {
    this.seleccionarPersonajes();
  };

  //realizaremos la misma seleccion de personajes cuando se actualice la variable props
  componentDidUpdate = (prevprops) => {
    if (prevprops.vision !== this.props.vision) {
      this.setState({
        estado: false,
      });
      this.seleccionarPersonajes();
    }
  };

  render() {
    if (this.state.estado === true) {
      return (
        <div className="row row-cols-5 g-2">
          {this.state.seleccionados.map((personaje, index) => {
            return (
              <Personaje key={index} index={index} personaje={personaje} />
            );
          })}
        </div>
      );
    } else {
      return <h1>Cargando Personajes</h1>;
    }
  }
}

//creamos la funcion Personaje que se encargara de crear las cartas con sus animaciones
function Personaje(props) {
  const { index, personaje } = props;

  const [volteado, setVolteado] = useState(false);
  const [encima, setEncima] = useState(false);

  //En vez de crear una constante, cambiamos directamente los valores CSS con Spring para que sea mas sencillo,
  //ademas de usar un config personalizado
  const { transform, opacity, display, border } = useSpring({
    transform: volteado ? "rotateY(0deg)" : "rotateY(360deg)",
    opacity: volteado ? "0" : "1",
    display: volteado ? "block" : "none",
    border: encima ? "5px solid rgb(212,175,55)" : "1px solid rgb(212,175,55)",
    config: { mass: 1, tension: 500, friction: 80 },
  });

  return (
    <div
      style={{ maxWidth: "350px" }}
      key={index}
      onClick={() => {
        setVolteado(!volteado);
        setEncima(false);
      }}
      className="col text-center"
    >
      <animated.div style={{ border }} className="card mb-3 m-2">
        <ReactHowler src={sonidoCarta} playing={volteado} />
        <animated.img
          onMouseEnter={() => {
            setEncima(true);
          }}
          onMouseOut={() => {
            setEncima(false);
          }}
          src={personaje.imagen}
          style={{ opacity, transform }}
          className="img-fluid card-img-top"
          alt="nombreImagen"
        />
        <animated.div style={{ display }} className="card-img-overlay">
          <h1 className="card-title">{personaje.nombre}</h1>
          <p className="card-text">
            Arma: <b>{personaje.arma}</b>
          </p>
          <p className="card-text">
            Ciudad: <b>{personaje.ciudad}</b>
          </p>
          <p className="card-text">
            <small className="text-muted">
              Rareza: {personaje.estrellas} estrellas
            </small>
          </p>
        </animated.div>
      </animated.div>
    </div>
  );
}
