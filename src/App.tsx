import { useState } from 'react';
import NavItem, { navItems } from './NavItem/NavItem';
import Section, { sections } from './Section/Section';
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
          {navItems.map(({ key, icon, label }) => (
            <NavItem
              key={key}
              icon={icon}
              label={label}
              isActive={activeSection === key}
              onClick={() => setActiveSection(key)}
            />
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