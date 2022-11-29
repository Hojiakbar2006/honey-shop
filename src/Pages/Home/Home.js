import React from "react";
import "./Home.css";
import { Header } from "../../Components/Header/Header";
import { Section1 } from "../../Components/HomeSec/Section1";

export function Home() {
  return (
    <section id="home">
      <Header />
      <Section1 />
    </section>
  );
}
