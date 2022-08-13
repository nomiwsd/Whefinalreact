import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <section className="About pe-3 py-3">
        <div className="container">
          <div className="row featurette">
            <div className="col-md-6 order-md-2 order-first ms-3">
              <h1 className="para featurette-heading">
                WHE CLUB- YOUR KEY TO EXPLORING METAVERSE
              </h1>
              <p className="para text-start fs-6 ms-md-2">
                We believe that one of the most valuable aspects of any
                community is user generated content. More importantly user
                generated content that helps the community foster and grow. WHE
                Metaverse is an interactive 3D universe based in space, with the
                freedom to explore different virtual worlds and communities, it
                is not necessarily a game in and of itself. It can instead best
                be described as a hub for virtual social interaction and
                expression, and trading and collecting assets within a digital
                economy, and our WHE Club is the key to unlocking this world.
                WHE Club NFTs is a limited collection of unique,
                programmatically generated NFTs hosted on the Polygon
                blockchain. Each WHE is unique – just like you and
                programmatically generated from over 200 possible traits,
                including clothing, city background, expression and more.
              </p>
              <button type="button" className="btn btn-lg">
                Read More
              </button>
            </div>
            <div className="col-md-5 col-12 py-2 order-md-1 order-last">
              <img
                src="./images/nft.png"
                alt="Wait for Internet"
                width="90%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
