import { useState, useEffect } from "react";

import styled from "styled-components";
import styles from "app/styles/projects.css";

import Cards from "~/routes/projects/projectCards";
import Notes from "~/routes/projects/projectNotes";

import corkboardLow from "app/components/projects/corkboard-low.png";
import corkboard from "app/components/projects/corkboard.png";

import spiritlabs from "app/components/projects/spiritlabs-card.png";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  const [currentContent, setCurrentContent] = useState(false);
  const [corkBoardSrc, setcorkBoardSrc] = useState(corkboardLow || corkboard);

  const scrollTo = (id: string) => {
    const newContent = document.getElementById(id);
    newContent !== null &&
      newContent.scrollIntoView({
        behavior: "smooth",
      });
  };

  useEffect(() => {
    const img = new Image();
    img.src = corkboard;
    img.onload = () => {
      setcorkBoardSrc(corkboard);
    };
  }, []);

  return (
    <Wrapper className="container">
      <span className="corkboard-wrapper">
        <img
          className="corkboard"
          src={corkBoardSrc}
          alt="Memories Corkboard"
          width="100%"
        />
        <img className="spiritlabs" src={spiritlabs} alt="Spiritech Camp" />
      </span>
      <button
        id="view-change"
        onClick={() => setCurrentContent(!currentContent)}
      >
        {currentContent ? "Toggle projects' notes" : "Toggle featured works"}
      </button>
      {currentContent ? (
        <span className="details">
          <Cards />
        </span>
      ) : (
        <span className="project-notes">
          <Notes />
        </span>
      )}
      <button
        id="view-change"
        onClick={() => (
          setCurrentContent(!currentContent), scrollTo("view-change")
        )}
      >
        {currentContent ? "View my projects' notes" : "View my featured works"}
      </button>
      <span className="verify">
        <h3>
          Still in doubt? Ask{" "}
          <a href="https://www.reddit.com/user/lalonso2/">Raz</a> - leader of
          Yggdrasil clan and clan's discord owner for verification.
        </h3>
      </span>
    </Wrapper>
  );
}

export type projectCard = {
  url: string;
  type: string;
  title: string;
  order: number;
};
const Wrapper = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 3px;
`;
