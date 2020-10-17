import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HoverImage from "./HoverImage.jsx";
import style from "../Staff.module.css";

export default function People({ elements }) {
  return (
    <Container className={style.imageContainer} fluid>
      <Row
        md={{ span: 8, offset: 2 }}
        sm={{ span: 8, offset: 2 }}
        xs={{ span: 11, offset: 1 }}
        lg={{ span: 8, offset: 2 }}
      >
        <Col className={style.contribTitle}>Web Developers</Col>
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
            <HoverImage person={person} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}