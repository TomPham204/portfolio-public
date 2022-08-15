import type { MetaFunction } from "@remix-run/node";
import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import styles from "app/styles/global.css";

import ScrollTop from "app/components/home/scrollTop";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}
export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Tom Pham's Portfolio",
    viewport: "width=device-width,initial-scale=1",
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Layout>
                    <Outlet />
                </Layout>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo">
                    Tom Pham's Portfolio
                </Link>
                <span>
                    <Link to="/" className="nav-button">
                        Home
                    </Link>
                    <Link to="/my-story" className="nav-button">
                        Story
                    </Link>
                    <Link to="/projects" className="nav-button">
                        Projects
                    </Link>
                    <Link to="/resume" className="nav-button">
                        Resumé
                    </Link>
                </span>
                <ScrollTop />
            </nav>
            {children}
            <footer>
                <h4>© 2022 Tom Pham</h4>
            </footer>
        </>
    );
}
