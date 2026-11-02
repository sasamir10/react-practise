export default function Greeting({ naam = "Bunny" }) {
    return (
        <>
            <h3>
                {/* Impure component */}
                Hola! {naam}, your lucky number is {Math.random(3)}{" "}
            </h3>
        </>
    );
}
