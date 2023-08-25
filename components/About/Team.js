import React from "react";
import { Carousel, Image } from "react-bootstrap";

function Team() {
  return (
    <>
      <div className="container text-center ">
        <div className="unique_text">
          <h2>
          <span style={{ color: "#A6CE41" }}> Our </span> Team 
          </h2>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div class="card card_1">
            <Image
              src="./images/shiv.webp"
              class="card-img-top t-img"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Shiv Kumar</h5>
              <p class="card-text team_text">
              Mentor
              </p>
            </div>
          </div>
            <div class="card card_1">
              <Image
                src="./images/Shoanli.webp"
                class="card-img-top t-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Shaonli Chakraborty</h5>
                <p class="card-text team_text">Mentor</p>
              </div>
            </div>
            <div class="card card_1">
              <Image
                src="./images/krishna.webp"
                class="card-img-top t-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Krishnamoorthy</h5>
                <p class="card-text team_text">Director</p>
              </div>
            </div>
            <div class="card card_1">
              <Image
                src="./images/raghu.webp"
                class="card-img-top t-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Raghunathan</h5>
                <p class="card-text team_text">Advisor</p>
              </div>
            </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div class="card card_1">
            <Image
              src="./images/shiv.webp"
              class="card-img-top t-img"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Shiv Kumar</h5>
              <p class="card-text team_text">
              Mentor
              </p>
            </div>
          </div>
            <div class="card card_1">
              <Image
                src="./images/Shoanli.webp"
                class="card-img-top t-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Shaonli Chakraborty</h5>
                <p class="card-text team_text">Mentor</p>
              </div>
            </div>
            <div class="card card_1">
              <Image
                src="./images/krishna.webp"
                class="card-img-top t-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Krishnamoorthy</h5>
                <p class="card-text team_text">Director</p>
              </div>
            </div>
            <div class="card card_1">
              <Image
                src="./images/raghu.webp"
                class="card-img-top t-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Raghunathan</h5>
                <p class="card-text team_text">Advisor</p>
              </div>
            </div>
        </div>
        <div className="d-flex flex-row justify-content-center test-center">
          <div class="card card_1">
            <Image
              src="./images/shiv.webp"
              class="card-img-top t-img"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Shiv Kumar</h5>
              <p class="card-text team_text">
              Mentor
              </p>
            </div>
          </div>
            <div class="card card_1">
              <Image
                src="./images/Shoanli.webp"
                class="card-img-top t-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Shaonli Chakraborty</h5>
                <p class="card-text team_text">Mentor</p>
              </div>
            </div>
            
        </div>
      </div>
    </>
  );
}

export default Team;
