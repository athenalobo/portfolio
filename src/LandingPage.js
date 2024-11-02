import React, { useState } from 'react';
import './LandingPage.css';
import profilePic from './profile-pic.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div className="landing-container">
      <div className="profile-section">
        <img
          src={profilePic}
          alt="Athena Lobo"
          className="profile-pic"
          onClick={() => setShowModal(true)}
        />
        <h1 className="name">Athena Marianne Lobo</h1>
        <p className="tagline">Software Engineer | Scrum Master | Enthusiastic Learner</p>

        <div className="action-buttons">
          {/* <button className="cta-button">Download Resume</button> */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/athena-lobo" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/athenalobo" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="mailto:lobo.ath@gmail.com">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={profilePic} alt="Athena Lobo" className="modal-image" />
          </div>
        </div>
      )}

      <div className="grid-container">
        <div className="grid-item" onClick={handleAboutClick}>
          <h2>About</h2>
          <p>Get to know me and my journey in tech!</p>
        </div>
        {/* <div className="grid-item">
          <h2>Experience</h2>
          <p>Highlights from my career at CAST Software and beyond.</p>
        </div>
        <div className="grid-item">
          <h2>Projects</h2>
          <p>A showcase of the exciting work I've done in UI, automation, and more.</p>
        </div>
        <div className="grid-item">
          <h2>Skills</h2>
          <p>Technologies and tools I enjoy working on, including JavaScript, Java, Python, and more.</p>
        </div> */}
      </div>
    </div>
  );
}

export default LandingPage;