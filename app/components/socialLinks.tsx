import styled from "styled-components";
import styles from "app/styles/index.css";
import Linkedin from "app/components/home/linkedin";
import linktree from "app/components/home/linktree.png";
import email from "app/components/home/email.png";
import github from "app/components/home/github.png";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}
export default function SocialLinks() {
    return (
        <Wrapper>
            <span className="social">
                <a
                    href="mailto:tompham204@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={email} alt="email icon" width="50" />
                </a>
                <a
                    href="https://github.com/TomPham204"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={github} alt="github icon" width="40" />
                </a>
                <a
                    href="https://www.linkedin.com/in/tompham204/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Linkedin />
                </a>
                <a
                    href="https://linktr.ee/tompham"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linktree} alt="linktree icon" width="45" />
                </a>
            </span>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    overflow: hidden;
`;
