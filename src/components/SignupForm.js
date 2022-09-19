import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();
    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("Passwords did not match!");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            navigate("/");
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Failed to Signup!");
        }
    }

    return (
        <Form style={{ height: "500px" }} onSubmit={submitHandler}>
            <TextInput
                type="text"
                placeholder="Enter Your Name..."
                icon="person"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
                required
            />
            <TextInput
                type="email"
                placeholder="Enter Your Email..."
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextInput
                type="password"
                placeholder="Enter Password..."
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <TextInput
                type="password"
                placeholder="Enter Confirm Password..."
                icon="lock_clock"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <Checkbox
                text="I agree to the Terms &amp; Conditions"
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
                required
            />
            <Button type="submit" disabled={loading}>
                <span>Submit now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account?
                <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}
