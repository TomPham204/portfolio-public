import downArrow from "app/components/story/down-arrow.png";
import styles from "app/styles/story.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}
export default function Arrow(props: { toNextId: (arg0: number) => void; }) {
    return (
        <button id="down-arrow" onClick={() => props.toNextId(1)}>
            <img src={downArrow} alt="move to next section" width="40" />
        </button>
    );
}
