import React, { Image } from 'react'
import style from "../main.module.css";
import { Row, Col } from "react-bootstrap";
import waterImg from "../images/water.jpg";
import heartImg from "../images/heart.jpg";
import milesImg from "../images/miles.jpg";

export function Stats({
  person: {
    img,
    name,
    age,
    height,
    weight,
    bio,
    miles,
    water,
    heart,
    workouts
  },
}) {

  return (
    <div className={style.popupBox}>
      <Row md={{ span: 8, offset: 2 }}
        sm={{ span: 8, offset: 2 }}
        xs={{ span: 11, offset: 1 }}
        lg={{ span: 8, offset: 2 }} className={style.stats}>
        <Col md={4}
          sm={6}
          xs={12} offset={2}>
          <img src={milesImg} style={{ width: "50px", height: "50px", paddingRight: "10px" }} />
          {miles}
        </Col>
        <Col md={4}
          sm={6}
          xs={12} offset={2}>
          <img src={waterImg} style={{ width: "50px", height: "50px" }} />
          {water}
        </Col>
        <Col md={4}
          sm={6}
          xs={12} offset={2}>
          <img src={heartImg} style={{ width: "50px", height: "40px", paddingRight: "10px" }} />
          {heart}
        </Col>
      </Row>
      <Row md={{ span: 8, offset: 2 }}
        sm={{ span: 8, offset: 2 }}
        xs={{ span: 11, offset: 1 }}
        lg={{ span: 8, offset: 2 }}>
        <table className={style.workout}>
          <tr>
            <th>Workout</th>
            <th>Duration</th>
            <th>Calories Burned</th>
          </tr>
          <tr>
            <td>Weight lifting</td>
            <td>1.5 hours</td>
            <td>260 calories</td>
          </tr>
          <tr>
            <td>Sprints</td>
            <td>30 minutes</td>
            <td>300 calories</td>
          </tr>
          <tr>
            <td>Ropes Course</td>
            <td>1 hour</td>
            <td>70 calories</td>
          </tr>
          <tr>
            <td>Squats</td>
            <td>40 minutes</td>
            <td>100 calories</td>
          </tr>
          <tr>
            <td>Swimming</td>
            <td>1 hour</td>
            <td>270 calories</td>
          </tr>
        </table>
      </Row>
    </div>
  )
}

export default Stats
