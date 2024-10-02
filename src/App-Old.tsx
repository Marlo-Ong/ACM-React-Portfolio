import { User, Code, Briefcase, Mail } from 'lucide-react';
import './App.css';

function showSection(sectionId: string) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  document.getElementById(sectionId)!.classList.add('active');

  // Update active button
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`button[onclick="showSection('${sectionId}')"]`)!.classList.add('active');
}

const App = () => {
  return (
    <div className="app">
      <div className="portfolio">

        <div className="header">
          <div className="title">Software Engineer</div>
          <h1>Your Name</h1>
          <p>A brief tagline about yourself</p>
        </div>

        <nav>
          <button onClick={() => showSection("about")}>
            <User className="icon" size={16} /> About Me
          </button>

          <button onClick={() => showSection("skills")}>
            <Code className="icon" size={16} /> Skills
          </button>

          <button onClick={() => showSection("projects")}>
            <Briefcase className="icon" size={16} /> Projects
          </button>

          <button onClick={() => showSection("contact")}>
            <Mail className="icon" size={16} /> Contact
          </button>
        </nav>

        <div className="content">
          <div id="about" className="section active">
            <h2>About Me</h2>
            <p>Hello! I'm a passionate software engineer with a focus on web development.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTG7x1skmjpRO_95RVuL14k1euB1wVBg8lLQ&s" />
          </div>

          <div id="skills" className="section">
            <h2>Skills</h2>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Python</li>
            </ul>
          </div>

          <div id="projects" className="section">
            <h2>Projects</h2>
            <div className="project">
              <h3>Project 1</h3>
              <p>A brief description of your first project.</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>A brief description of your second project.</p>
            </div>
          </div>

          <div id="contact" className="section">
            <h2>Contact</h2>
            <p>Email: your.email@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
            <p>GitHub: github.com/yourusername</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;