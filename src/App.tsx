import { useState } from 'react';
import { navItems, sections } from './Sections';
import Section from './Section/Section';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].key);

  return (
    <div className="app">
      <div className="portfolio">

        <div className="header">
          <div className="title">Software Engineer</div>
          <h1>Your Name</h1>
          <p>A brief tagline about yourself</p>
        </div>

        <nav>
          {navItems.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={activeSection === key ? 'active' : ''}
            >
              <Icon className="icon" size={16} /> {label}
            </button>
          ))}
        </nav>

        <div className="content">
          {activeSection in sections && (
            <Section
              title={sections[activeSection as keyof typeof sections].title}
              content={sections[activeSection as keyof typeof sections].content}
            />
          )}
        </div>

      </div>
    </div>
  );
};

export default App;