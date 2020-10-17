import React from 'react';
import './App.css';
import People from "./main/components/People.js";
import style from "./main/main.module.css";
import ranger from "./main/images/soldier.jpg";

const listPeople = [
  { img: ranger, name: "Ranger 1", age: "22", height: "6'1", weight: "180 lbs", bio: "rank" },
  { img: ranger, name: "Ranger 2", age: "23", height: "6'4", weight: "172 lbs", bio: "rank" },
  { img: ranger, name: "Ranger 3", age: "22", height: "6'3", weight: "197 lbs", bio: "rank" },
  { img: ranger, name: "Ranger 4", age: "20", height: "6'1", weight: "201 lbs", bio: "rank" },
  { img: ranger, name: "Ranger 5", age: "25", height: "6'2", weight: "180 lbs", bio: "rank" },
  { img: ranger, name: "Ranger 6", age: "23", height: "6'1", weight: "210 lbs", bio: "rank" },
  { img: ranger, name: "Ranger 7", age: "24", height: "6'0", weight: "150 lbs", bio: "rank" },
  { img: ranger, name: "Ranger 8", age: "21", height: "6'2", weight: "190 lbs", bio: "rank" },
];

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono" rel="stylesheet" />
      <div className="container-fluid" style={{ padding: "0px" }}>
        <p className={style.Mainfont}>
          Squad Fitness Tracker
            </p>
      </div>

      {/* elements should be a list containing each person's information 
[
  ["Sophia", 22, June, sophia.headshot.jpg],
  [...]   
  person: {
    name,
    age,
    height,
    weight,
    bio,
    img
  },
] */}
      {<People elements={listPeople} />}
    </div>
  );
}

export default App;
