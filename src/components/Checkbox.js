export default function Checkbox({ className, text, ...rest }) {
    return (
        <label className={className}>
            <input style={{ marginRight: "10px" }} type="checkbox" {...rest} />
            <span>{text}</span>
        </label>
    );
}
