import Profile from "./components/Profile";

function App() {
    const person = "Samir";
    const profession = "Software Developer";
    const age = 26;

    return (
        <>
            <h1>Hola!</h1>
            <Profile person={person} />
        </>
    );
}

export default App;
