import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import { HideDuring } from "react-hide-on-scroll";

import styles from "app/styles/index.css";

import PersonalDetails from "~/components/home/personalDetails";
import avatar from "~/components/home/Tuan.jpeg";
import nextjs from "~/components/home/nextjs.png";
import storybook from "app/components/home/storybook.png";
import stitches from "~/components/home/stitches.png";
import html from "~/components/home/html.png";
import css from "~/components/home/css.png";
import remix from "~/components/home/remix-run.png";
import reactQuery from "~/components/home/react-query.png";
import SocialLinks from "~/components/socialLinks";
import downArrow from "app/components/story/down-arrow.png";
import clickMe from "app/components/story/clickme.png";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
    const [techstackScrolled, setTechStackScrolled] = useState(false);
    const [showClickme, setShowClickme] = useState(true);

    const toNextId = (id: string) => {
        const newContent = document.getElementById(id);
        newContent !== null &&
            newContent.scrollIntoView({
                behavior: "smooth",
            });
    };

    useEffect(() => {
        const scrollContainer = document.querySelector("#techstack");
        scrollContainer !== null &&
            scrollContainer.addEventListener("wheel", (e: any) => {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
                setTechStackScrolled(true);
            });
        scrollContainer !== null &&
            scrollContainer.addEventListener("scroll", (e: any) => {
                setTechStackScrolled(true);
            });
        () => (
            scrollContainer !== null &&
                scrollContainer.removeEventListener("wheel", (e: any) => {
                    e.preventDefault();
                    scrollContainer.scrollLeft += e.deltaY;
                    setTechStackScrolled(true);
                }),
            scrollContainer !== null &&
                scrollContainer.addEventListener("scroll", (e: any) => {
                    setTechStackScrolled(true);
                })
        );
    }, []);

    setTimeout(() => {
        setShowClickme(false);
    }, 1500);

    return (
        <div className="container">
            <section className="intro">
                <span className="left">
                    <img src={avatar} alt="Profile" />
                </span>
                <span className="right">
                    <span className="text-wrapper">
                        <h1>Meet</h1>
                        <h2>Tom Pham</h2>
                        <h4>"Front end? Design? I do both"</h4>
                        <SocialLinks />
                    </span>
                </span>
                {showClickme && (
                    <img
                        id="clickme"
                        src={clickMe}
                        alt="hint to click at arrow down button"
                    />
                )}
                <button id="github" onClick={() => toNextId("fake-final")}>
                    Visit site's repo
                </button>
                <button id="down-arrow" onClick={() => toNextId("about-me")}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </section>
            <section id="about-me">
                <h3>My details</h3>
                <PersonalDetails />

                <button
                    id="down-arrow"
                    onClick={() => toNextId("my-techstack")}
                >
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </section>
            <section id="my-techstack">
                <h3>What I've had prior experience with</h3>
                <section id="techstack">
                    {myTechStack.map((img) => (
                        <a key={img.href} href={img.href} className="icon">
                            <img alt={img.alt} src={img.src} height="80" />
                        </a>
                    ))}
                </section>
                <button
                    id="down-arrow"
                    onClick={() => toNextId("techstack-revisit")}
                >
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </section>

            {techstackScrolled ? (
                <section id="techstack-revisit" className="techstack-scrolled">
                    <span className="firework-wrapper">
                        <div className="firework"></div>
                        <div className="firework"></div>
                        <div className="firework"></div>
                        <div className="firework"></div>
                        <div className="firework"></div>
                        <div className="firework"></div>
                    </span>
                    <h3>You scrolled on the tech stack list. Nice try!</h3>

                    <button
                        id="down-arrow"
                        onClick={() => toNextId("fake-final")}
                    >
                        <img
                            src={downArrow}
                            alt="move to next section"
                            width="40"
                        />
                    </button>
                </section>
            ) : (
                <section
                    id="techstack-revisit"
                    className="techstack-not-scrolled"
                >
                    <HideDuring inverse>
                        <button
                            id="up-arrow"
                            onClick={() => toNextId("my-techstack")}
                        >
                            <img
                                src={downArrow}
                                alt="move to next section"
                                width="40"
                            />
                        </button>
                    </HideDuring>
                    <h3>
                        Not enough techs? Try scrolling on the tech stack list
                        and let the magic happens.
                    </h3>
                </section>
            )}
            <section id="fake-final" className="final">
                <h3>
                    So, the end? Not until I tell you how I built this site.
                </h3>
                <div>
                    <h3>A certain amount of ReactJS</h3>
                    <h3>+</h3>
                    <h3>some Remix stuff</h3>
                    <h3>+</h3>
                    <h3>a generous dosage of CSS</h3>
                    <h3>+</h3>
                    <h3>
                        a heart filled with <h2>love</h2> and <h2>passion</h2>
                    </h3>
                </div>
                <h3 className="to-repo">
                    <a href="https://github.com/TomPham204/portfolio-public">
                        Visit site's repo
                    </a>
                </h3>
                <button id="down-arrow" onClick={() => toNextId("final")}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </section>
            <section id="final" className="final">
                <h3>Ok, this is the real end of the homepage</h3>
                <h3>I hope you had a good time</h3>
                <h3>Want to experience more?</h3>
                <h3>
                    <Link to="/my-story" className="end-link">
                        To Story
                    </Link>{" "}
                    or{" "}
                    <Link to="/projects" className="end-link">
                        To Projects
                    </Link>
                </h3>
            </section>
        </div>
    );
}

const myTechStack = [
    {
        src: html,
        alt: "HTML",
        href: "https://www.w3.org/html",
    },
    {
        src: css,
        alt: "CSS",
        href: "https://en.wikipedia.org/wiki/CSS",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/150px-Unofficial_JavaScript_logo_2.svg.png",
        alt: "JavaScript",
        href: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
        src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
        alt: "TypeScript",
        href: "https://typescriptlang.org",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207",
        alt: "ReactJS",
        href: "https://reactjs.org/",
    },
    {
        src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
        alt: "Prettier",
        href: "https://prettier.io",
    },
    {
        src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
        alt: "ESLint",
        href: "https://eslint.org",
    },
    {
        src: nextjs,
        alt: "NEXTJS",
        href: "https://nextjs.org/",
    },
    {
        src: remix,
        alt: "REMIX RUN",
        href: "https://remix.run/",
    },
    {
        src: reactQuery,
        alt: "REACT QUERY",
        href: "https://react-query-v3.tanstack.com/",
    },
    {
        src: storybook,
        alt: "STORYBOOK",
        href: "https://storybook.js.org/",
    },
    {
        src: stitches,
        alt: "STITCHES",
        href: "https://stitches.dev/",
    },
];
