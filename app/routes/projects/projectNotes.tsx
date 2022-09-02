import styles from "app/styles/projects.css";

import project1 from "app/components/projects/project1.png";
import project2 from "app/components/projects/project2.png";
import project3 from "app/components/projects/project3.png";
import project4 from "app/components/projects/project4.png";
import project5 from "app/components/projects/project5.png";
import project6 from "app/components/projects/project6.png";
import project7 from "app/components/projects/project7.png";
import project8 from "app/components/projects/project8.png";
import project9 from "app/components/projects/project9.png";
import project10 from "app/components/projects/project10.png";
import project11 from "app/components/projects/project11.png";
import project12 from "app/components/projects/project12.png";
import project13 from "app/components/projects/project13.png";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
const Notes = () => {
  return (
    <span className="note-wrapper">
      {projects.map((project, index) => (
        <img key={index} src={project.url} alt={project.title} />
      ))}
    </span>
  );
};
const projects = [
  { url: project1, title: "GovInsider" },
  { url: project2, title: "Bartender Site" },
  { url: project12, title: "Online Portfolio" },
  { url: project11, title: "Online Icebreaker Game" },
  { url: project3, title: "Yggdrasil clan's avatar" },
  { url: project4, title: "Discord stickers/emojis" },
  { url: project5, title: "Marvel Future Fight gameplay" },
  { url: project6, title: "Live Wallpapers" },
  { url: project7, title: "Osu skin - Slim-eX" },
  { url: project8, title: "AIP-BDET" },
  { url: project9, title: "Yggdrasil's Google sheet" },
  { url: project10, title: "Yggdrasil's OCR script" },
  { url: project13, title: "Learning for Everyone" },
];

export default Notes;
