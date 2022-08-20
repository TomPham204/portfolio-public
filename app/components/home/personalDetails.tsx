import styles from "app/styles/index.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function PersonalDetails() {
    return (
        <span className="details-wrapper">
            <div className="border-effect">
                <table>
                    <tr>
                        <td className="label">English name</td>
                        <td className="value">Tom Pham</td>
                    </tr>
                    <tr>
                        <td className="label">Vietnamese name</td>
                        <td className="value">Phạm Công Tuấn</td>
                    </tr>
                    <tr>
                        <td className="label">Nicknames</td>
                        <td className="value">
                            <span className="down">
                                <div>TomX204</div>
                                <div>The C4T</div>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="label">Age</td>
                        <td className="value">20s</td>
                    </tr>
                    <tr>
                        <td className="label">Occupation</td>
                        <td className="value">Front-end Developer</td>
                    </tr>
                    <tr>
                        <td className="label">Featured skills</td>
                        <td className="value">
                            <span className="down">
                                <div>Web - Front end</div>
                                <div>Designing</div>
                                <div>Photo-video-audio editing</div>
                                <div>Planning</div>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="label">Pastimes</td>
                        <td className="value">
                            <span className="down">
                                <div>Playing video games</div>
                                <div>Studying something new</div>
                                <div>Working on a personal project</div>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="label">Favorite food</td>
                        <td className="value">
                            <span className="down">
                                <div>Pho (Phở)</div>
                                <div>Ice cream</div>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="label">Favorite quote</td>
                        <td className="value">
                            "The way to get started is to quit talking and begin
                            doing" - Walt Disney
                        </td>
                    </tr>
                    {/* <tr>
                        <td className="label">Girlfriend</td>
                        <td className="value">
                            Currently having a crush on a girl with firstname
                            beginning with "T"
                        </td>
                    </tr> */}
                    <tr>
                        <td className="label">Life events</td>
                        <td className="value">
                            <span className="down">
                                <div>
                                    ◾ 2019: Graduate from Nguyen Huu Huan High
                                    School
                                </div>
                                <div>
                                    ◾ Jul 2022: Front-end internship at Spirit
                                    Labs
                                </div>
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        </span>
    );
}

export type Details = Array<{ label: string; values: Array<string> }>;
