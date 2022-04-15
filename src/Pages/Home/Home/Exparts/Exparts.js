import React from "react";
import expart1 from "../../../../img/expert-1.jpg";
import expart2 from "../../../../img/expert-2.jpg";
import expart3 from "../../../../img/expert-3.jpg";
import expart4 from "../../../../img/expert-4.jpg";
import expart5 from "../../../../img/expert-5.jpg";
import expart6 from "../../../../img/expert-6.png";
import Expart from "../Expart/Expart";
const Exparts = () => {
  const exparets = [
    { id: 1, name: "will smith", img: expart1 },
    { id: 2, name: "cris Rock", img: expart2 },
    { id: 3, name: "dwain", img: expart3 },
    { id: 4, name: "Messi", img: expart4 },
    { id: 5, name: "Ronamdo", img: expart5 },
    { id: 6, name: "Neymer", img: expart6 },
  ];
  return (
    <div className="container">
      <h2 className="text-primary text-center">Our exparts</h2>
      <div className="row">
        {exparets.map((expart) => (
          <Expart key={expart.id} expart={expart}></Expart>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
