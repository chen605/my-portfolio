import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 mx-3 mr-4 text-white hover:text-black text-4xl font-bold cursive tracking-widest"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 mx-3 my-6 rounded text-white hover:text-black"
            activeClassName="text-white bg-indigo-900"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 mx-3 my-6 rounded text-white hover:text-black"
            activeClassName="text-white bg-indigo-900"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 mx-3 my-6 rounded text-white hover:text-black"
            activeClassName="text-white bg-indigo-900"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/chen-chow-59186a200/"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ style: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/chen605/my-portfolio"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ style: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/chen.chow.520"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ style: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
