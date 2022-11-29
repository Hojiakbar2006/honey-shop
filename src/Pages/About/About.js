import React from "react";
import { AboutSec } from "../../Components/AboutSec/AboutSec";
import { AboutHeader } from "../../Components/Header/AboutHeader";
import "./About.css";

import aboutImg1 from "../../Assets/images/aboutImg1 12.08.53.png"
import aboutImg2 from "../../Assets/images/aboutImg2 12.08.53.png"
import aboutImg3 from "../../Assets/images/aboutImg3 12.08.53.png"
import aboutImg4 from "../../Assets/images/aboutImg4 12.08.53.png"

const AboutInfo = [
  {
    id: 1,
    name: "What is Lorem ipsum ?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five Ipsum.",
    img: aboutImg1,
  },
  {
    id: 1,
    name: "What is Lorem ipsum ?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five Ipsum.",
    img: aboutImg2,
  },
  {
    id: 1,
    name: "What is Lorem ipsum ?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five Ipsum.",
    img: aboutImg3,
  },
  {
    id: 1,
    name: "What is Lorem ipsum ?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five Ipsum.",
    img: aboutImg4,
  },
];

export function About() {
  return (
    <section id="about">
      <AboutHeader />
      <AboutSec data={AboutInfo} />
    </section>
  );
}
