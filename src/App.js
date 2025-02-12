import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';

// Home Component
function Home() {
  return (
    <section className="home">
      <img src="/images/My-img.JPEG" alt="Your Name" className="profile-photo" />
      <h1>Hi, I'm Pal Tilva</h1>
      <p className="description">
        I'm a passionate developer with a love for tech and solving real-world problems. Let's connect!
      </p>
      <div className="contact">
        <div className="social-links">
        <a href="mailto:paltilva26@gmail.com<" target="_blank" rel="noopener noreferrer"><img src="/images/email.png" alt="Email" className="social-logo"/></a>
          <a href="https://www.linkedin.com/in/pal-tilva" target="_blank" rel="noopener noreferrer"><img src="/images/linkedIn.png" alt="LinkedIN" className="social-logo"/></a>
          <a href="https://github.com/prt2" target="_blank" rel="noopener noreferrer"><img src="/images/github.png" alt="GitHub" className="social-logo"/></a>
        </div>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <h3>Languages</h3>
      <div className="skills-container">
      <div className="skill-logo">
          <img src="/images/html.png" alt="HTML" />
          <span className="skill-name">HTML</span>
        </div>
        <div className="skill-logo">
          <img src="/images/css.png" alt="CSS" />
          <span className="skill-name">CSS</span>
        </div>
        <div className="skill-logo">
          <img src="/images/JS.png" alt="JavaScript" />
          <span className="skill-name">JavaScript</span>
        </div>
        <div className="skill-logo">
          <img src="/images/TS.png" alt="TypeScript" />
          <span className="skill-name">TypeScript</span>
        </div>
        <div className="skill-logo">
          <img src="/images/python.png" alt="Python" />
          <span className="skill-name">Python</span>
        </div>
        <div className="skill-logo">
          <img src="/images/C.png" alt="C" />
          <span className="skill-name">C</span>
        </div>
        <div className="skill-logo">
          <img src="/images/C++.png" alt="C++" />
          <span className="skill-name">C++</span>
        </div>
        <div className="skill-logo">
          <img src="/images/rust.png" alt="Rust" />
          <span className="skill-name">Rust</span>
        </div>
        <div className="skill-logo">
          <img src="/images/haskell.png" alt="Haskell" />
          <span className="skill-name">Haskell</span>
        </div>
        <div className="skill-logo">
          <img src="/images/nodeJS.jpeg" alt="NodeJS" />
          <span className="skill-name">NodeJS</span>
        </div>
      </div>
      <div>
        <h3>Frameworks</h3>
        <div className="skill-logo">
          <img src="/images/react.jpeg" alt="React" />
          <span className="skill-name">React</span>
        </div>
      </div>
    </section>
  );
}

// Experience Component
function Experience() {
  return (
    <section className="experience">
      <h2>My Experience</h2>
      <p>
        I've had the privilege of working on a variety of exciting projects.
        Here's a quick overview of some of my experiences:
      </p>
      <ul>
        <li>
        <h3>🚨 ReportVan :</h3>
          <p>Collaborated in a team of 5 to develop a high-performance, web-based emergency reporting system using Next.js with server-side rendering (SSR), achieving a Lighthouse score of 95 and 100% compliance with the Product Requirements Document (PRD).
          </p>
          <p>Check it out on GitHub: </p> <a href="https://github.com/ryotakc/cmpt272-project" target="_blank" rel="noopener noreferrer"><img src="/images/github.png" alt="GitHub" className="experience-logo"/></a>
           
        </li>
        <li>
        <h3>🥗 StormForge by<a href = "https://sfusurge.com/" className= "resume-link">SFU Surge</a> :</h3>
          <p>Currently collaborating in a team of 4 to develop a mood-based food Tinder-like app.</p>
        </li>
        <li>
        <h3>📍 Hack-The-Sem 2025 by<a href = "https://go.sfss.ca/clubs/878/info" className= "resume-link">GDSC SFU</a> :</h3>
          <p>Currently collaborating in a team of 4 to develop a commute-friendly app. </p>
        </li>
      </ul>
      <p>
        You can check out my<a href="./public/docs/MYresume.pdf" className= "resume-link" target="_blank" rel="noopener noreferrer">resume here</a>.
      </p>
      
    </section>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}
export default App;
