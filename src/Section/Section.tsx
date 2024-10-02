function Section(props: { title: string, content: React.ReactNode }) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.content}
    </div>
  )
}

// ---- THE SAME! ----
// interface SectionProps {
//   title: string;
//   content: React.ReactNode;
// }

// const Section: React.FC<SectionProps> = ({ title, content }) => (
//   <div>
//     <h2>{title}</h2>
//     {content}
//   </div>
// );

export default Section