import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import notes from "../assets/notes.svg";
import cloud from "../assets/cloud.svg";
import crossPlatform from "../assets/cross-platform.png";
import robot from "../assets/robot.svg";
import sharing from "../assets/sharing.svg";
import collaborate from "../assets/collaborate.svg";
import translate from "../assets/translate.svg";
import mic from "../assets/mic.svg";
import dictionary from "../assets/dictionary.svg";

function Features() {
  const featuresData = [
    {
      icon: notes,
      title: "Note Making",
      subtitle: "Streamlined Creativity",
      description:
        "Effortlessly jot down your thoughts, ideas, and reminders with our intuitive note-making interface emphasizes the simplicity of using the note.",
    },
    {
      icon: crossPlatform,
      title: "Cross Platform",
      subtitle: "Anywhere Access",
      description:
        "Enjoy the flexibility of accessing your notes from any device, whether you're on your computer, smartphone, or tablet.",
    },
    {
      icon: cloud,
      title: "Cloud Storage",
      subtitle: "Secure Repository",
      description:
        "Rest easy knowing your notes are securely stored in the cloud, protected with state-of-the-art encryption.",
    },
    {
      icon: robot,
      title: "AI Writing",
      subtitle: "Smart Suggestions",
      description:
        "Enhance your note-taking with AI-driven assistance. Our algorithms analyze your content, providing suggestions for clearer expression.",
    },
    {
      icon: collaborate,
      title: "Collaborate Writing",
      subtitle: "Teamwork Boost",
      description:
        "Boost productivity with real-time collaboration. Edit notes simultaneously with colleagues for seamless teamwork.",
    },
    {
      icon: sharing,
      title: "Notes Sharing",
      subtitle: "Effortless Sharing",
      description:
        "Effortlessly share ideas with our intuitive tools. Whether it's with individuals or groups, collaboration is made easy.",
    },
    {
      icon: translate,
      title: "Translate",
      subtitle: "Break barriers",
      description:
        "Break barriers, connect effortlessly. Fluent communication across languages with our seamless Translate feature.",
    },
    {
      icon: mic,
      title: "Voice to Text",
      subtitle: "Effortless dictation",
      description:
        "Speak, watch, type. Instant transcription, hands-free. Effortless note-taking with Voice to Text feature.",
    },
    {
      icon: dictionary,
      title: "Spelling and Grammer",
      subtitle: "Polished writing",
      description:
        "Perfect prose, error-free. Elevate writing quality with real-time corrections from our Spelling and Grammar feature.",
    },
  ];
  return (
    <div className="features-container">
      <h1>Explore Our Features</h1>
      <div className="container text-center mt-5 features-boxes">
        <div className="row">
          {featuresData.map((feature, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <Tilt>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="card d-flex flex-column h-100"
                >
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <img src={feature.icon} alt={feature.title} height={24} />
                      {feature.title}
                    </h5>
                    <h6 className="card-subtitle color-red mb-2 text-body-secondary">
                      {feature.subtitle}
                    </h6>
                    <p className="card-text flex-grow-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          ))}
        </div>
        <div className="button">
          <button className="btn btn-primary mx-auto">
            Get started for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
