import { Link } from "@remix-run/react";
import styles from "app/styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function SplatRoute() {
  return (
    <div className="container">
      <section id="splat">
        <h3>Hmm, 404 Error?</h3>
        <h3>The URL seems weird. Are you sure it exists?</h3>
        <h3>
          <Link to="/">Back to Home</Link>
        </h3>
      </section>
    </div>
  );
}
