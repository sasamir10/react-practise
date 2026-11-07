export default function Signup() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log("Default behaviour worked");
            }}
        >
            <input />
            <button>Send</button>
        </form>
    );
}
