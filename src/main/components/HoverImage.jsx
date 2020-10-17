import React from "react";
import { Image } from "react-bootstrap";
import LinkedIn from "../images/linkedin.png";
import siteImage from "../images/site.png";
import emailImage from "../images/email.png";
import style from "../Staff.module.css";

export default function HoverImage({
  person: {
    name,
    year,
    linked,
    site,
    college,
    major,
    interests,
    desc,
    img,
    email,
  },
})

return (
  <div>
    <div className={style.flipcard}>
      <div className={style.flipcardInner}>
        <div className={style.flipcardFront}>
          <Image src={img} className={style.imageStyle} alt={name} />
          <div className={style.imageOverlay}>
            <div className={style.flipcardBack}>
              {[
                { text: "Year", content: year },
                { text: "Major", content: major },
                { text: "College", content: college },
                { text: "Interests/ECs", content: interests },
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
        <div className={style.icons}>
          {iconType("", "linkedIn")}
          {iconType("", "personalSite")}
          {iconType("", "email")}
        </div>
      </div>
    </div>

    <div className={style.imageTitle}>
      {name}
    </div>

    <div className={style.descriptionXS}>
      <h3>{desc}</h3>
    </div>
  </div>
);
}