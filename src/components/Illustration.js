import LoginImage from "../assets/images/login.svg";
import SignupImage from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";

export default function Illustration({ login, signup }) {
    return (
        <div className={classes.illustration}>
            {login && <img src={LoginImage} alt="LoginImage" />}
            {signup && <img src={SignupImage} alt="Signup" />}
        </div>
    );
}
