import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import HoverImage from "./HoverImage.jsx";
import style from "../main.module.css";
import Stats from "./Stats.js";
import Popup from 'reactjs-popup';

function MyVerticallyCenteredModal(props) {
  return (<Modal
    {...props}
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {props.person.name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid">
      <Stats person={props.person} />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>)
}

export default function People({ elements }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>

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
              <Button variant="primary" onClick={() => setModalShow(true)}>
                <HoverImage person={person} />
              </Button>
              <MyVerticallyCenteredModal
                person={person}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          ))}
        </Row>
      </Container >
    </div>
  );
}