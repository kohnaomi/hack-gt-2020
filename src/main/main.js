import React, { Component } from 'react'
import People from "./components/People.js";
import style from "./main.module.css";


export class main extends Component {
  render() {
    return (
      <>
        <Container>
          <link href="https://fonts.googleapis.com/css2?family=Play&family=Titillium+Web&display=swap" rel="stylesheet" />
          <div className="container-fluid" style={{ padding: "0px" }}>
            <div className={style.parallax}>
              <p className={style.title}>
                Meet The Squad
            </p>
            </div>
          </div>
          {data && (
            <>
              {/* elements should be a list containing each person's information 
[
  ["Sophia", 22, June, sophia.headshot.jpg],
  [...]
] */}
              {<People elements="" />}
            </>
          )}
        </Container>
      </>
    )
  }
}

export default main
