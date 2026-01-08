import React, { useState } from "react";
import "./Certificate.css";
import AWS from "../../assets/AWS.png";
import EXCEL from "../../assets/excel.png";
import GIT from "../../assets/Git.png";
import PHP from "../../assets/PHP.png";
import BlurText from "../../Blurtext/BlurText";

  const certificateData = [
    {thumbnail:AWS,
      link:"https://coursera.org/share/49c8a53a192b07ecfd0dd29288c4ad0c",
      name:"AWS Cloud Practitioner Essentials",
    },
    {thumbnail:PHP,
      link:"https://coursera.org/share/b87c56fcc75ce09a8eb3eac514aac5d3",
      name:"Master Full-Stack Web Development with Laravel & PHP",
    },
    {thumbnail:GIT,
      link:"https://coursera.org/share/d255e9238f4ade9c69091e9057ded0f7",
      name:"Introduction to Git and GitHub",
    },
    {thumbnail:EXCEL,
      link:"https://coursera.org/share/e6e5f5ebddfdf8453cbf5564f4603c41",
      name:"Excel Basics for Data Analysis",
    },
    
  ];
  const Certificates = () => {
  
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="cert-wrapper container-fluid" data-scroll data-scroll-speed="6" >
      <div className="d-flex">
      <BlurText
       text="Non - Credit Courses"
       className=" cert-title ms-auto  "
       animateBy="words"
       delay={120}
       direction="top"
      />
      </div>

      <div className="row justify-content-center mt-4">
        {certificateData.map((cert, index) => (
          <div className="col-6 col-md-3 p-3" key={index}>
            <div
              className="cert-card"
             
              onClick={() => setSelectedCert(cert)}
            >
            
              <img
                src={cert.thumbnail}
                className="cert-img"
                alt={cert.name + " thumbnail"}
              />
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="popup-overlay" onClick={() => setSelectedCert(null)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            
            <h3 className="popup-header">View Certificate: {selectedCert.name}</h3>
            
            <p className="popup-info">
              Click the button below to view the official document in a new tab.
            </p>

            <a 
              href={selectedCert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-cert-btn"
            >
              View Certificate Link
            </a>

            <button className="close-btn" onClick={() => setSelectedCert(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;