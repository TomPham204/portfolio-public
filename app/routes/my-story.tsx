import { useState, useEffect } from "react";
import useSound from "use-sound";
import { Link } from "@remix-run/react";

import styled from "styled-components";
import styles from "app/styles/story.css";

import musicNote from "app/components/story/music-note.png";
import musicMute from "app/components/story/music-mute.png";
import arrow from "app/components/arrow.png";
import music1 from "app/components/story/beginning.mp3";
import SocialLinks from "app/components/socialLinks";
import downArrow from "app/components/story/down-arrow.png";
import clickMe from "app/components/story/clickme.png";

import story1 from "app/components/story/story1.png";
import story2 from "app/components/story/story2.png";
import story3 from "app/components/story/story3.png";
import story4 from "app/components/story/story4.png";
import story5 from "app/components/story/story5.png";
import story6 from "app/components/story/story6.png";
import story7 from "app/components/story/story7.png";
import story8 from "app/components/story/story8.png";
import story9 from "app/components/story/story9.png";
import story10 from "app/components/story/story10.png";
import story11 from "app/components/story/story11.png";
import story11crush from "app/components/story/story11-crush.png";
import story11heart from "app/components/story/story11-heart.png";
import story12 from "app/components/story/story12.png";
import story13 from "app/components/story/story13.png";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
    const [defaultBGM] = useState(music1);
    const [isMute, setIsMute] = useState(false);
    const [initialPlay, setInitialPlay] = useState(true);
    const [showArrow, setShowArrow] = useState(true);
    const [showClickme, setShowClickme] = useState(true);
    const [showCrush, setShowCrush] = useState(false);
    const [count, setCount] = useState(0);
    const [currentSong, setCurrentSong] = useState(music1);
    const [currentContent, setCurrentContent] = useState(0);
    const [play, { stop, sound }] = useSound(currentSong || defaultBGM, {
        interrupt: true,
        loop: true,
    });

    useEffect(() => {
        isMute ? stop() : (play(), setInitialPlay(false));
        return () => stop();
    }, [isMute, play, stop]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        count === 3 && setShowCrush(true);
    }, [count]);

    useEffect(() => {
        setTimeout(() => {
            setShowClickme(false);
        }, 2000);
    }, [showClickme]);

    const startStory = () => {
        const beginning = document.getElementById("beginning");
        beginning !== null &&
            beginning.scrollIntoView({
                behavior: "smooth",
            });
        setShowArrow(false);
        setShowClickme(true);
        !isMute && initialPlay && play();
    };

    const toNextId = (id = currentContent) => {
        const newContent = document.getElementById(
            ids[id < ids.length ? id + 1 : currentContent]
        );
        newContent !== null &&
            newContent.scrollIntoView({
                behavior: "smooth",
            });
        setCurrentContent(currentContent + 1);
    };

    const changeSong = (song: string) => {
        sound.fade(1, 0, 300);
        setTimeout(() => {
            setCurrentSong(song);
        }, 500);
        sound.fade(0, 1, 300);
    };

    const handleScroll = () => {
        setShowArrow(false);
    };

    return (
        <Wrapper>
            <div id="prepare">
                <button id="music-note" onClick={() => setIsMute(!isMute)}>
                    {isMute ? (
                        <img
                            id="unmute"
                            src={musicMute}
                            alt="music note"
                            width="30"
                        />
                    ) : (
                        <img
                            id="mute"
                            src={musicNote}
                            alt="music note"
                            width="30"
                        />
                    )}
                </button>
                {showArrow && (
                    <img
                        id="arrow"
                        src={arrow}
                        alt="arrow pointing to mute button"
                    />
                )}
                <span className="text-wrapper">
                    <h1>BGM is on by default.</h1>
                    <h1>Click the music note to mute it.</h1>
                </span>
                <button id="start" onClick={startStory}>
                    Start
                </button>
            </div>
            <div id="beginning">
                <h1>The beginning</h1>
                <button id="down-arrow" onClick={() => toNextId(0)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
                {showClickme && (
                    <img
                        id="clickme"
                        src={clickMe}
                        alt="hint to click at arrow down button"
                    />
                )}
            </div>
            <div id="beginning-content-1">
                <span>
                    <span className="to-left">
                        <p>I live a life like everyone else.</p>
                        <p>Attending school. Meeting friends.</p>
                        <p>Learning new things. Growing up.</p>
                    </span>
                    <img src={story1} alt="story images" />
                </span>

                <button id="down-arrow" onClick={() => toNextId(1)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="beginning-content-2">
                <span>
                    <img src={story2} alt="story images" />
                    <span className="to-right">
                        <p>Since I was young, I have</p>
                        <p>always been interested in art.</p>
                    </span>
                </span>
                <button id="down-arrow" onClick={() => toNextId(2)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="beginning-content-3">
                <span className="center">
                    <p>Which form of art, you ask?</p>
                    <p>Anything that is beautiful and harmonious.</p>
                </span>
                <button id="down-arrow" onClick={() => toNextId(3)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="beginning-content-4">
                <span>
                    <span className="to-left">
                        <p>In any form.</p>
                        <p>Music. Photo. Video.</p>
                    </span>
                    <img src={story3} alt="story images" />
                </span>

                <button id="down-arrow" onClick={() => toNextId(4)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="and">
                <h1>Got it. Anything else?</h1>
                <button id="down-arrow" onClick={() => toNextId(5)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="and-content-1">
                <span>
                    <span className="to-left">
                        <p>During my upbringing,</p>
                        <p>I also quickly grew fond of computers.</p>
                        <p>I mean, technology in general.</p>
                    </span>
                    <img src={story4} alt="story images" />
                </span>

                <button id="down-arrow" onClick={() => toNextId(6)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="and-content-2">
                <span className="center">
                    <p>Art + Technology = ???</p>
                    <p>Maybe, a beautiful product like this page?</p>
                </span>
                <button id="down-arrow" onClick={() => toNextId(7)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="after-that">
                <span className="center">
                    <p>Anyway, a long time pass...</p>
                </span>
                <button id="down-arrow" onClick={() => toNextId(8)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="after-that-content-1">
                <span>
                    <span className="to-left">
                        <p>I'm now in high school.</p>
                        <p>Wondering about my</p>
                        <p>future occupation.</p>
                    </span>
                    <img src={story5} alt="story images" />
                </span>

                <button id="down-arrow" onClick={() => toNextId(9)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="after-that-content-2">
                <span className="center">
                    <p>Ok, IT sounds good enough.</p>
                    <p>By the way...</p>
                </span>
                <button id="down-arrow" onClick={() => toNextId(10)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="after-that-content-3">
                <span>
                    <img src={story6} alt="story images" />
                    <span className="to-right">
                        <p>...since high school till now,</p>
                        <p>I've worked on many personal projects.</p>
                        <p>Mostly with Photoshop, Premiere</p>
                        <p>and Corel VideoStudio.</p>
                    </span>
                </span>

                <button id="down-arrow" onClick={() => toNextId(11)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="after-that-content-4">
                <span>
                    <img src={story7} alt="story images" />
                    <span className="to-right">
                        <p>In 2017, I made an</p>
                        <p>Osu! skin called Slim-eX</p>
                        <p>featuring glass-like components.</p>
                    </span>
                </span>
                <button id="down-arrow" onClick={() => toNextId(12)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="ending">
                <h1>Starting to feel a bit boring? </h1>
                <h1 id="nope">Almost at the end? Not yet.</h1>
                <button id="down-arrow" onClick={() => toNextId(13)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="next-content-1">
                <span className="center">
                    <p>Currently, I'm a final-year student</p>
                    <p>looking for a front-end fresher position.</p>
                    <p>"An online portfolio must be good" - I thought.</p>
                </span>
                <button
                    id="down-arrow"
                    onClick={() => (toNextId(14), changeSong(music1))}
                >
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="next-content-2">
                <span className="center">
                    <p>and that, my friend, is the story</p>
                    <p>of how this website was born.</p>
                </span>
                <button id="down-arrow" onClick={() => toNextId(15)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="next-content-3">
                <span>
                    <span className="to-left">
                        <p>During development,</p>
                        <p>I was able to learn that...</p>
                    </span>
                    <img src={story8} alt="blank" />
                </span>

                <button id="down-arrow" onClick={() => toNextId(16)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="next-content-4">
                <span className="center">
                    <p>"Good things take time"</p>
                </span>
                <button id="down-arrow" onClick={() => toNextId(17)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="next-content-5">
                <img id="special" src={story9} alt="sun rise background" />
                <span className="center">
                    <p>New journey - New challenges.</p>
                    <p>And I'm prepared.</p>
                </span>
                <button
                    id="down-arrow"
                    onClick={() => (toNextId(18), changeSong(music1))}
                >
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="new-journey">
                <h1>My tributes</h1>
                <button id="down-arrow" onClick={() => toNextId(19)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="new-journey-content-1">
                <span>
                    <span className="to-left">
                        <p>I would like to express</p>
                        <p>my thanks to my family...</p>
                    </span>
                    <img src={story10} alt="story images" />
                </span>

                <button id="down-arrow" onClick={() => toNextId(20)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="new-journey-content-2">
                <span>
                    <span className="crush">
                        {showCrush ? (
                            <img src={story11crush} alt="story images" />
                        ) : (
                            <img src={story11} alt="story images" />
                        )}
                        {!showCrush && (
                            <button onClick={() => setCount(count + 1)}>
                                <img src={story11heart} alt="heart icon" />
                            </button>
                        )}
                    </span>
                    <span className="to-right">
                        <p>...my crush</p>
                    </span>
                </span>

                <button id="down-arrow" onClick={() => toNextId(21)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="new-journey-content-3">
                <span>
                    <span className="to-left">
                        <p>my friends...</p>
                    </span>
                    <img src={story12} alt="story images" />
                </span>

                <button id="down-arrow" onClick={() => toNextId(22)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="new-journey-content-4">
                <span>
                    <img src={story13} alt="story images" />
                    <span className="to-right">
                        <p>...and everyone I've met</p>
                        <p>who has helped me</p>
                        <p>in one way or another.</p>
                    </span>
                </span>

                <button id="down-arrow" onClick={() => toNextId(23)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="new-journey-content-5">
                <span className="center">
                    <p>Do you want to become</p>
                    <p>a part of this beautiful story?</p>
                    <p>Contact me at</p>
                    <SocialLinks />
                </span>
                <button id="down-arrow" onClick={() => toNextId(24)}>
                    <img
                        src={downArrow}
                        alt="move to next section"
                        width="40"
                    />
                </button>
            </div>
            <div id="the-end">
                <h1>Thank you for reading</h1>
                <Link id="to-homepage" to="/">
                    To Home
                </Link>
            </div>
        </Wrapper>
    );
}

const ids = [
    "beginning",
    "beginning-content-1",
    "beginning-content-2",
    "beginning-content-3",
    "beginning-content-4",
    "and",
    "and-content-1",
    "and-content-2",
    "after-that",
    "after-that-content-1",
    "after-that-content-2",
    "after-that-content-3",
    "after-that-content-4",
    "ending",
    "next-content-1",
    "next-content-2",
    "next-content-3",
    "next-content-4",
    "next-content-5",
    "new-journey",
    "new-journey-content-1",
    "new-journey-content-2",
    "new-journey-content-3",
    "new-journey-content-4",
    "new-journey-content-5",
    "the-end",
];
const Wrapper = styled.section`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
