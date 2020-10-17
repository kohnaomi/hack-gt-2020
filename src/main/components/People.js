import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HoverImage from "./HoverImage.jsx";
import style from "../main.module.css";
import Stats from "./Stats.js"
import Popup from 'reactjs-popup';



export default function People({ elements }) {
  return (
    <Container className={style.imageContainer} fluid>
      <Row
        md={{ span: 8, offset: 2 }}
        sm={{ span: 8, offset: 2 }}
        xs={{ span: 11, offset: 1 }}
        lg={{ span: 8, offset: 2 }}
      >
      </Row>
      <Row className={style.imageRow}>
        {elements.map((person) => (
          <Col
            md={3}
            sm={6}
            xs={12}
            className={style.imageColumn}
            style={{ height: "100%" }}
          >
            <Popup style={{ position: "absolute" }} trigger={<button><HoverImage person={person} /></button>} position="center right">
              <Stats />
            </Popup>
          </Col>
        ))}
      </Row>
    </Container >
  );
}