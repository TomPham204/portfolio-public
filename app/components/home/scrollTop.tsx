import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

export default function ScrollTop() {
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = useCallback(() => {
        setIsShow(window.pageYOffset > 500);
        window.location.pathname === "/my-story" && setIsShow(false);
    }, []);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            {isShow && (
                <StyledButton onClick={scrollTop}>Back to top</StyledButton>
            )}
        </>
    );
}

const StyledButton = styled.button`
    position: fixed;
    z-index: 1;
    right: -50px;
    bottom: 45%;
    height: 45px;
    width: 130px;
    font-size: 20px;
    border-radius: 5px;
    border: transparent;
    background: black;
    color: white;
    padding: 2px 2px;
    cursor: pointer;
    border: 2px solid #9069f9;
    transform: rotate(-90deg);
`;
