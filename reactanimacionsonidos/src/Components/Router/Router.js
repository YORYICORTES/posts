import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Elemento from "../Navegacion/Elemento";
import Home from "../Navegacion/Home";
import Menu from "../Navegacion/Menu";

function ElementoParametro() {
  let { vision } = useParams();

  return <Elemento vision={vision} />;
}

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="elemento">
            <Route path=":vision" element={<ElementoParametro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
