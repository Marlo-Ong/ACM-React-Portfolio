import { LucideIcon, User, Code, Briefcase, Mail } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={isActive ? 'active' : ''}
  >
    <Icon className="icon" size={16} /> {label}
  </button>
);

export default NavItem;

export const navItems = [
  // Keys correspond to entries in the `sections` list
  { key: 'aboutSection', icon: User, label: 'About' },
  { key: 'skillsSection', icon: Code, label: 'Skills' },
  { key: 'projectsSection', icon: Briefcase, label: 'Projects' },
  { key: 'contactSection', icon: Mail, label: 'Contact' }
];