import { User, Code, Briefcase, Mail } from 'lucide-react';
import Project from './Project/Project';
import { projects } from './Projects';

const aboutSection = {
  title: "About Me",
  content: (
    <div>
      <p>Hello! I'm a passionate software engineer with a focus on web development.</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTG7x1skmjpRO_95RVuL14k1euB1wVBg8lLQ&s" />
    </div>)
}

const skillsSection = {
  title: "Skills",
  content: (
    <ul>
      <li>React</li>
      <li>TypeScript</li>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  )
}

const projectsSection = {
  title: "Projects",
  content: (
    <>
      {projects.map(({ title, description, image }) => (
        <Project
          title={title}
          description={description}
          image={image}
        />
      ))}
    </>
  )
}

const contactSection = {
  title: "Contact",
  content: (
    <>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
      <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
    </>
  )
}

export const sections = { aboutSection, skillsSection, projectsSection, contactSection };

export const navItems = [
  { key: 'aboutSection', icon: User, label: 'About' },
  { key: 'skillsSection', icon: Code, label: 'Skills' },
  { key: 'projectsSection', icon: Briefcase, label: 'Projects' },
  { key: 'contactSection', icon: Mail, label: 'Contact' }
];