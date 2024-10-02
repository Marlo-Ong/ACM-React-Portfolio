interface ProjectProps {
  title: string;
  description: string;
  image?: string;
}

const Section: React.FC<ProjectProps> = ({ title, description, image }) => (
  <div>
    <h3>{title}</h3>
    {description}
    {image && <img src={image} />}
  </div>
);

export default Section