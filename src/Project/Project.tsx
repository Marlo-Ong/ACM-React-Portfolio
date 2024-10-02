interface ProjectProps {
  title: string;
  description: string;
  image?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, image }) => (
  <div>
    <h3>{title}</h3>
    {description}
    {image && <img src={image} />}
  </div>
);

// ---- THE SAME! ----
// function Project(props: ProjectProps) {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       {props.description}
//       {props.image && <img src={props.image} />}
//     </div>
//   )
// }

export default Project