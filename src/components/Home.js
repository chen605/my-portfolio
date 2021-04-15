import React from "react";
import image from "../stars.jpg";
import About from "./About";
import NavBar from "./NavBar";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <NavBar color="white" />
      <main>
        <img
          src={image}
          alt="Coding"
          className="absolute object-cover w-full h-full"
        />
        <section className="about">
          <About />
        </section>
      </main>
    </div>
  );
}
