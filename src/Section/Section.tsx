interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    {content}
  </div>
);

export default Section