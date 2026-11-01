import User from "./components/UserInfo";

function App() {
    return (
        <>
            <h1>Our Team</h1>
            <User
                name="Samir"
                profession="Software Developer"
                age={26}
                location="USA"
            />
            <User
                name="Apoorva"
                profession="Frontend Developer"
                age={25}
                location="Australia"
            />
            <User
                name="John"
                profession="Backend Developer"
                age={27}
                location="UK"
            />
            <User
                name="Roy"
                profession="Software Engineer"
                age={29}
                location="USA"
            />
        </>
    );
}

export default App;
