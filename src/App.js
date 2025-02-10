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

// Main App Component
function App() {
  return (
    <Router>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
