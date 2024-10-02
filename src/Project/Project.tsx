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

export default Project

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

// Declare projects:

import FillerImage from './assets/filler-image.png';

const project1 = {
  title: "Project 1",
  description: "This is my description for project 1",
  image: FillerImage
}

const project2 = {
  title: "Project 2",
  description: "This is my description for project 2",
  image: FillerImage
}


export const projects = [project1, project2]