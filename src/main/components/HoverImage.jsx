import React from "react";
import { Image } from "react-bootstrap";
import style from "../main.module.css";
import ranger from "../images/soldier.jpg";
import Stats from "./Stats.js";


export default function HoverImage({
  person: {
    img,
    name,
    age,
    height,
    weight,
    bio
  },
}) {

  return (
    <div>
      <div className={style.flipcard}>
        <div className={style.flipcardInner}>
          <div className={style.flipcardFront}>
            <Image src={img} style={{ width: "198px", height: "290px" }} />
          </div>
          <div className={style.flipcardBack}>
            {[
              { text: "Name", content: name },
              { text: "Age", content: age },
              { text: "Height", content: height },
              { text: "Weight", content: weight },
              { text: "Expertise", content: bio }
            ].map(
              (val, i) =>
                val.content && (
                  <div key={i}>
                    <span style={{ color: "white" }}>{val.text}: </span>
                    <span>{val.content}</span>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div >
  );
}