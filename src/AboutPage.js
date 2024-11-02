import React from 'react';
import './AboutPage.css';
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaAward, FaBook, FaHeart } from 'react-icons/fa';

const AboutPage = () => {
    return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro-block">
        Motivated software engineer with a solid foundation in front-end and full-stack development, currently enjoying a challenging role at CAST Software. Skilled in delivering high-quality solutions and driven by a passion for innovation.
      </p>

      <div className="roadmap">
        
        <section className="roadmap-section experience-section">
          <div className="roadmap-icon"><FaBriefcase /></div>
          <h2 className="roadmap-section-title">Professional Experience</h2>
          <div className="roadmap-item">
            <p><strong>2023 - Present</strong> Junior Software Engineer<br />CAST Software, Bengaluru, India</p>
            <p>Led UI and CLI development, focusing on cloud scalability for CAST Imaging. Promoted agile workflows and team collaboration across international teams.</p>
          </div>
          <div className="roadmap-item">
            <p><strong>2022 - 2023</strong> Machine Learning Intern<br />MSR University</p>
            <p>Developed genre classification models for Indian classical music using machine learning, enhancing cultural data recognition.</p>
          </div>
          <div className="roadmap-item">
            <p><strong>2021 - 2022</strong> Full-Stack Developer<br />Boond Project</p>
            <p>Contributed to social impact projects through front-end and back-end development, enhancing accessibility and user engagement.</p>
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-icon"><FaGraduationCap /></div>
          <h2 className="roadmap-section-title">Education</h2>
          <div className="roadmap-item">
            <p><strong>M.S. Ramaiah Institute of Technology</strong><br />B.E. in Information Science, CGPA: 8.88/10</p>
          </div>
          <div className="roadmap-item">
            <p><strong>Sophia High School</strong> - ISC & ICSE<br />Class XII: 94.4% | Math: 100%</p>
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-icon"><FaProjectDiagram /></div>
          <h2 className="roadmap-section-title">Projects</h2>
          <div className="roadmap-item">
            <p>Developed an interactive coding game in C# and Unity, designed to teach basic programming principles such as conditionals and loops.</p>
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-icon"><FaAward /></div>
          <h2 className="roadmap-section-title">Honors & Awards</h2>
          <div className="roadmap-item">
            <p>🏆 Runners-up - Smart India Hackathon 2023</p>
            <p>🎖️ Toycathon 2020 Finalist</p>
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-icon"><FaBook /></div>
          <h2 className="roadmap-section-title">Publications</h2>
          <div className="roadmap-item">
            <p>“Meta Heuristic Technique with Reinforcement Learning for Node Deployment in Wireless Sensor Networks” - Springer, 2024</p>
            <a 
              href="https://link.springer.com/article/10.1007/s42979-024-02906-1"
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              View Article
            </a>
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-icon"><FaHeart /></div>
          <h2 className="roadmap-section-title">Interests</h2>
          <p>Travel • Self-Improvement • Nutrition • Chess • Cricket</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
