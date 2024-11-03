import React from 'react';
import './AboutPage.css';
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaAward, FaBook, FaHeart, FaHandsHelping } from 'react-icons/fa';

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
            <p><strong>2023 - Present | Junior Software Engineer<br />CAST Software, Bengaluru, India </strong></p>
            <p>Actively developing UI and CLI components in React.js and Python with a focus on cloud scalability for CAST Imaging, while serving as Scrum Master for cross-functional, international teams.</p>
          </div>
          <div className="roadmap-item">
            <p><strong>2022 - 2023 | Machine Learning Intern<br />MSR University </strong> </p>
            <p>Developed and implemented machine learning models for Carnatic and Hindustani music, including Hidden Markov models and genre classification models, using Python.</p>
          </div>
          <div className="roadmap-item">
            <p><strong>2021 - 2022 | Full-Stack Developer<br />MSR Hospital- Boond Project </strong></p>
            <p>Created a blood donation website with JavaScript, XAMPP, and an SQL database, enhancing patient accessibility and donor engagement in this socially impactful project.</p>
          </div>
        </section>

        <section className="roadmap-section experience-section">
    <div className="roadmap-icon"><FaHandsHelping /></div>
    <h2 className="roadmap-section-title">Voluntary Experience</h2>
    
    <div className="roadmap-item">
        <p><strong>Microsoft Beta Student Ambassador</strong><br />
        Hosted 2 hands-on workshops on fundamental and intermediate Java concepts, attended by over 200 students.</p>
    </div>

    <div className="roadmap-item">
        <p><strong>Intel IoT & Robotic Process Automation Club, MSRIT</strong><br />
        Founder of the club; organized multiple workshops and hackathons focused on IoT and RPA technologies.</p>
    </div>

    <div className="roadmap-item">
        <p><strong>UiPath Student Developer Champion</strong><br />
        Selected as one of the 82 champions from 5 countries (India, Indonesia, Nepal, Singapore, Sri Lanka) to promote RPA skills and tools, representing UiPath, a global leader in robotic process automation.</p>
    </div>

    <div className="roadmap-item">
        <p><strong>Project Developer Intern at Oorjja</strong><br />
        Contributed to building a gamified assessment platform for hearing-impaired students to test their coding ability.</p>
    </div>

    <div className="roadmap-item">
        <p><strong>Executive Member of Rotary International Student Interact Club</strong><br />
        Led a drive that collected and distributed food and clothing to underprivileged families.</p>
    </div>
</section>


        <section className="roadmap-section">
          <div className="roadmap-icon"><FaGraduationCap /></div>
          <h2 className="roadmap-section-title">Education</h2>
          <div className="roadmap-item">
            <p><strong>M.S. Ramaiah Institute of Technology</strong><br />B.E. in Information Science, CGPA: 8.88/10</p>
          </div>
          <div className="roadmap-item">
            <p><strong>Sophia High School</strong> <br /> ISC Class XII, overall 95.75% | Math: 100% <br /> ICSE Class X, overall 94.70% | Math: 100%  </p>
          </div>
        </section>

        {/* <section className="roadmap-section">
          <div className="roadmap-icon"><FaProjectDiagram /></div>
          <h2 className="roadmap-section-title">Personal Projects</h2>
          <div className="roadmap-item">
            <p>Developed an interactive coding game in C# and Unity, designed to teach basic programming principles such as conditionals and loops.</p>
          </div>
        </section> */}

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
          <p>Travel • Fitness • Nutrition • Chess • Cricket</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
