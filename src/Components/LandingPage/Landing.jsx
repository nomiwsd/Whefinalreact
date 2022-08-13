import React from "react";

import "./Landing.css";
function Landing() {
  return (
    <div>
      <div className="Paragraph">
        <div className="row featurette ps-lg-5">
          <div className="col-md-6 col-12 p-0">
            <h1 className="display-2 px-3 px-lg-0">
              Welcome To <span className="fonth">WHE NFT</span>
            </h1>
            <p className="ms-lg-5 mx-4 Paragraphtext">
              An exclusive private-members club by Swap. Swap NFTs in a
              decentralized environment, with an escrow mechanism facilitating
              swaps between users. On WHE NFT, every swap is resolved to the
              full satisfaction of participants.
            </p>
            <p className="ms-lg-5 mx-4  Paragraphtext">
              A private and unique collection of 10000 NFT, which act as a
              membership for the WHE Club. WHE is next-generation decentralized
              NFT platform for all types of marketplaces catering to the growing
              world of digital artists, creators, and collectors. WHE NFT wants
              to be the first truly community-run marketplace and believes that
              the diversity will make it an eccent ric and truly one-of-a-kind
              project in the world
            </p>
          </div>
          <div className="col d-flex justify-content-center my-5">
            <section className="three-d-container">
              <input
                type="radio"
                checked
                className="three-d-bullet a"
                name="three-d"
              />
              <input type="radio" className="three-d-bullet b" name="three-d" />
              <input type="radio" className="three-d-bullet c" name="three-d" />
              <input type="radio" className="three-d-bullet d" name="three-d" />
              <input type="radio" className="three-d-bullet e" name="three-d" />
              <input type="radio" className="three-d-bullet f" name="three-d" />
              <div className="three-d-cube">
                <figure className="three-d-item">
                  <img src="./images/Lion (1).png" alt="" />
                </figure>
                <figure className="three-d-item">
                  <img src="./images/Lion (2).png" alt="" />
                </figure>
                <figure className="three-d-item">
                  <img src="./images/Lion (3).png" alt="" />
                </figure>
                <figure className="three-d-item">
                  <img src="./images/Lion (6).png" alt="" />
                </figure>
                <figure className="three-d-item">
                  <img src="./images/Lion (5).png" alt="" />
                </figure>
                <figure className="three-d-item">
                  <img src="./images/Lion (4).png" alt="" />
                </figure>
                <figure className="three-d-item">
                  <img src="./images/Lion (5).png" alt="" />
                </figure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
