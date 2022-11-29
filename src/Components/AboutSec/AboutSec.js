import React from "react";
import "./AboutSec.css";

export function AboutSec({ data }) {
  return (
    <section id="AboutSec">
      {data.map((item) => {
        return (
          <div>
            <figure>
              <img src={item.img} alt="lorem" />
            </figure>
            <div>
              <h2>{item.name}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
