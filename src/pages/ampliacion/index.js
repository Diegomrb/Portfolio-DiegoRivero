import React, {useEffect, useState} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link} from "react-router-dom";

import {
  meta,
  dataportfolio,
} from "../../content_option";

export const Ampliacion = () => {
  const { id } = useParams();
  const [trabajo, setTrabajo] = useState();
  useEffect(() => {
     setTrabajo(dataportfolio[Number(id)]);
    }, [id])
  return (
    <HelmetProvider>
      {trabajo?<Container className="About-header">
        <Link to="/portfolio" className="text_2">
                    <div id="button_h" className="ac_btn btn">
                      Volver
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
        <Helmet>
          <meta charSet="utf-8" />
          <title> {trabajo.name} | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> {trabajo.name} </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          {/* <Col className="mb-4" lg="12"> */} 
          <div className="mb-3 po_items_amp">
            <div className="po_item_amp">
          <img  src={trabajo.img} alt="" />
          </div>
          </div>
          <Col className="mb-4" lg="8">
            <p>{trabajo.descripcionAmpliacion}</p>
          </Col>

          <Container className="About-header">
        
        <Row className=" mb-2 sec_sp">
          <Col lg="9">
            <div className="po_item_amp">
             <img  src={trabajo.captura1} alt="" />
             </div>
          </Col>
          <Col lg="3">
               
          </Col>
        </Row>

        <Row className="mb-2 sec_sp">
          <Col lg="4">
            
          </Col>

          <Col lg="8">
            <div className="po_item_amp">
           <img  src={trabajo.captura2} alt="" />
           </div>
          </Col>
        </Row>

        <Row className=" mb-5 sec_sp">
          <Col lang="7">
             <div className="po_item_amp">
            <img  src={trabajo.captura3} alt="" />
            </div>
          </Col>
          <Col lg="5">
            
          </Col>
        </Row>
      </Container>

          <Col   lg="12">
           <div className="loom"><iframe className="iframe" src={trabajo.loomVideo} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>
          </Col>

          
        </Row>
        <div className="intro_btn-action pb-5">
                  <Link to={trabajo.linkExterno} target="_blank" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Ver más
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
      </Container>:<h1>Cargando</h1>}
    </HelmetProvider>
  );
};
