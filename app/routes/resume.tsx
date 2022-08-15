import React, { useState, useEffect, useCallback } from "react";
import { Link } from "@remix-run/react";

import styles from "app/styles/resume.css";

import cv from "app/components/resume/cv.png";
import cvlow from "app/components/resume/cv-low.png";
import SocialLinks from "app/components/socialLinks";
import arrow from "app/components/arrow.png";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
    const [isShow, setIsShow] = useState(false);
    const [imgSrc, setImgSrc] = useState(cvlow || cv);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = cv;
        img.onload = () => {
            setImgSrc(cv);
        };
    }, []);

    const handleScroll = useCallback(() => {
        setIsShow(window.pageYOffset > 60);
    }, []);

    return (
        <>
            <span className="wrapper">
                <div className="special">
                    {!isShow && (
                        <img
                            className="arrow"
                            src={arrow}
                            alt="arrow to homepage"
                        />
                    )}
                    <h3>
                        <a
                            className="to-drive"
                            href="https://1drv.ms/b/s!ArPVZgo5x8MIgslfcwxjXLWNp8s__g?e=hfP1xI"
                        >
                            Download pdf
                        </a>
                        <br />
                        Looking for contact? Either visit{" "}
                        <Link to="/" className="to-homepage">
                            Home
                        </Link>{" "}
                        or scroll down a bit...
                    </h3>
                    <img
                        className="img"
                        src={imgSrc}
                        alt="My CV"
                        width="80vw"
                    />
                </div>
                {isShow && <SocialLinks />}
            </span>
        </>
    );
}
