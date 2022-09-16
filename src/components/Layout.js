import classes from "../styles/Layout.module.css";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main className={classes.main}>
                <diV className={classes.container}>{children}</diV>
            </main>
        </>
    );
}
