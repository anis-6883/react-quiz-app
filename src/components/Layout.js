import classes from "../styles/Layout.module.css";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main className={classes.main}>
                <div className={classes.container}>{children}</div>
            </main>
        </>
    );
}
