export default function Greeting() {
    /* function handleClick() {
        console.log("The button is Clicked!");
    } */

    return (
        <>
            <button
                onClick={() => {
                    console.log("Button clicked by Arrow function");
                }}
            >
                Use Me!
            </button>
        </>
    );
}
