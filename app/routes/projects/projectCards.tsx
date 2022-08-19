import React from "react";
import ReactPlayer from "react-player";

import styles from "app/styles/projects.css";

import spiritlabsCert from "app/components/projects/spiritlabs-cert.png";
import discordSticker from "app/components/projects/discord-stickers.png";
import discordEmoji from "app/components/projects/discord-emojis.png";
import livewallpaper1 from "app/components/projects/wallpaper1.mp4";
import livewallpaper2 from "app/components/projects/wallpaper2.mp4";
import livewallpaper3 from "app/components/projects/wallpaper3.mp4";
import slimex from "app/components/projects/slimex-glass-effect.png";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}
const Cards = () => {
    return (
        <>
            {projects.map((each, index) => (
                <span className="card" key={index}>
                    {each.order === 1 ? (
                        each.type === "image" ? (
                            <span className="black">
                                <img src={each.url} alt={each.title} />
                                <div>{each.title}</div>
                            </span>
                        ) : (
                            <span className="black">
                                <span className="video">
                                    <ReactPlayer
                                        volume={0}
                                        muted={true}
                                        loop={true}
                                        playing={true}
                                        url={each.url}
                                        width="100%"
                                        height="100%"
                                    />
                                </span>
                                <div>{each.title}</div>
                            </span>
                        )
                    ) : each.type === "image" ? (
                        <span className="white">
                            <div>{each.title}</div>
                            <img src={each.url} alt={each.title} />
                        </span>
                    ) : (
                        <span className="white">
                            <div>{each.title}</div>
                            <span className="video">
                                <ReactPlayer
                                    volume={0}
                                    muted={true}
                                    loop={true}
                                    playing={true}
                                    url={each.url}
                                    width="100%"
                                    height="100%"
                                />
                            </span>
                        </span>
                    )}
                </span>
            ))}
        </>
    );
};

const projects = [
    {
        url: spiritlabsCert,
        type: "image",
        title: "Spiritech Camp 2022 Certificate",
        order: 1,
    },
    { url: slimex, type: "image", title: "Osu! skin: Slim-eX", order: 2 },
    { url: discordSticker, type: "image", title: "Discord Stickers", order: 1 },
    { url: discordEmoji, type: "image", title: "Discord Emojis", order: 2 },
    {
        url: livewallpaper1,
        type: "video",
        title: "Live Wallpaper #1",
        order: 1,
    },
    {
        url: livewallpaper2,
        type: "video",
        title: "Live Wallpaper #2",
        order: 2,
    },
    {
        url: livewallpaper3,
        type: "video",
        title: "Live Wallpaper #3",
        order: 1,
    },
];

export default Cards;
