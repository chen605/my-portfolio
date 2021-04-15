import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ fixed, color }) {
  return (
    <header className="absolute z-10 ">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 mx-3 mr-4 text-black text-4xl font-bold cursive tracking-widest"
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/project"
            className={`inline-flex items-center py-3 mx-3 my-6 rounded text-${color} hover:underline`}
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
