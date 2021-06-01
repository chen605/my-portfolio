import React from "react";
import image from "../Nightsky.jpg";
import About from "./About";
import NavBar from "./NavBar";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <NavBar color="white" />
      <main className="home">
        <img
          src={image}
          alt="Coding"
          className="absolute object-cover w-full h-full background"
        />
        <section className="about">
          <About />
        </section>
      </main>
    </div>
  );
}
