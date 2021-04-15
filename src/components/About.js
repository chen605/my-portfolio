import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { SocialIcon } from "react-social-icons";
import "../styles/Home.css";
import { useHistory } from "react-router";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);
  const history = useHistory();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative content">
      <div className="container mx-auto relative ">
        <section className="lg:flex">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded lg:w-64 lg-h-64 mr-20"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center ">
            <h1 className="cursive sm:text-6xl text-green-300 ">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="5mh5d4l6"
                dataset="production"
              />
            </div>
            <h3 className="text-white inline-flex justify-center">
              Curious about my projects? Check it out!
            </h3>
            <div
              className="box__button"
              onClick={() => history.push("/project")}
            >
              <button className="text-white inline-flex justify-center button">
                Projects
              </button>
            </div>
            <div className="inline-flex justify-center my-5">
              <SocialIcon
                url="https://www.linkedin.com/in/chen-chow-59186a200/"
                className="mr-4 "
                target="_blank"
                fgColor="#fff"
                style={{ style: 35, width: 35 }}
              />
              <SocialIcon
                url="https://github.com/chen605"
                className="mr-4 "
                target="_blank"
                fgColor="#fff"
                style={{ style: 35, width: 35 }}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
