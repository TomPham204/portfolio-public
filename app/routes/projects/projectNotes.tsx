import React from "react";
import ReactPlayer from "react-player";

import styles from "app/styles/projects.css";

import project1 from "app/components/projects/project1.png";
import project2 from "app/components/projects/project2.png";
import project3 from "app/components/projects/project3.png";
import project4 from "app/components/projects/project4.png";
import project5 from "app/components/projects/project5.png";
import project6 from "app/components/projects/project6.png";
import project7 from "app/components/projects/project7.png";
import project8 from "app/components/projects/project8.png";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}
const Notes = () => {
    return (
        <span className="note-wrapper">
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project3} alt="" />
            <img src={project4} alt="" />
            <img src={project5} alt="" />
            <img src={project6} alt="" />
            <img src={project7} alt="" />
            <img src={project8} alt="" />
        </span>
    );
};

export default Notes;
