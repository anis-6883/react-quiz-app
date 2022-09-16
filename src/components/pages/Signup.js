import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration signup />
                <Form className={classes.signup}>
                    <TextInput
                        type="text"
                        placeholder="Enter Your Name..."
                        icon="person"
                        autoFocus
                    />
                    <TextInput
                        type="email"
                        placeholder="Enter Your Email..."
                        icon="alternate_email"
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter Password..."
                        icon="lock"
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter Confirm Password..."
                        icon="lock_clock"
                    />
                    <Checkbox text="I agree to the Terms &amp; Conditions" />
                    <Button>
                        <span>Submit now</span>
                    </Button>

                    <div className="info">
                        Already have an account?
                        <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
