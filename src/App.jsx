export default function App() {
    const LogIn = "samir";

    return (
        <>
            <h1>Hola! Welcome to my Page</h1>

            {LogIn.length > 0 && <h3>You are logged in already...</h3>}
        </>
    );
}
