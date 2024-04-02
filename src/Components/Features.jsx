import React from "react";
import notes from "../assets/notes.svg";
import cloud from "../assets/cloud.svg";
import crossPlatform from "../assets/cross-platform.png";
import robot from "../assets/robot.svg";
import sharing from "../assets/sharing.svg";
import collaborate from "../assets/collaborate.svg";

function Features() {
  return (
    <div className="features-container">
      <h1>Explore Our Features</h1>
      <div className="container text-center features-boxes">
        <div className="row">
          <div className="col">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">
                  <img src={notes}></img> Note Making
                </h5>
                <h6 className="card-subtitle color-red mb-2 text-body-secondary">
                  Streamlined Creativity
                </h6>
                <p className="card-text">
                Effortlessly jot down your thoughts, ideas, and reminders with our intuitive note-making interface
                </p>
                
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">
                <img src={crossPlatform} height={24}></img> Cross Platform
                </h5>
                <h6 className="card-subtitle color-red mb-2 text-body-secondary">
                  Anywhere Access
                </h6>
                <p className="card-text">
                Enjoy the flexibility of accessing your notes from any device, whether you're on your computer, smartphone, or tablet.
                </p>
                
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">
                <img src={cloud} height={24}></img> Cloud Storage
                </h5>
                <h6 className="card-subtitle color-red mb-2 text-body-secondary">
                  Secure Repository
                </h6>
                <p className="card-text">
                Rest easy knowing your notes are securely stored in the cloud, protected with state-of-the-art encryption.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">
                <img src={robot} height={24}></img> AI Writing
                </h5>
                <h6 className="card-subtitle color-red mb-2 text-body-secondary">
                  Smart Suggestions
                </h6>
                <p className="card-text">
                Enhance your note-taking with AI-driven assistance. Our algorithms analyze your content, providing suggestions for clearer expression.
                </p>
                
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">
                <img src={collaborate} height={24}></img> Collaborate Writing
                </h5>
                <h6 className="card-subtitle color-red mb-2 text-body-secondary">
                  Teamwork Boost
                </h6>
                <p className="card-text">
                Boost productivity with real-time collaboration. Edit notes simultaneously with colleagues for seamless teamwork.
                </p>
                
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">
                <img src={sharing} height={24}></img> Notes Sharing
                </h5>
                <h6 className="card-subtitle color-red mb-2 text-body-secondary">
                  Effortless Sharing
                </h6>
                <p className="card-text">
                Effortlessly share ideas with our intuitive tools. Whether it's with individuals or groups, collaboration is made easy.
                </p>
                
              </div>
            </div>
          </div>
        </div>
          <div className="button">
            <button className="btn btn-primary mx-auto">Get started for free</button>
          </div>
      </div>
    </div>
  );
}

export default Features;
