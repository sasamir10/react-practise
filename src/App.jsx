export default function Toolbar() {
    return (
        <div
            className="Toolbar"
            onClick={() => {
                console.log("You clicked on the toolbar!");
            }}
        >
            <button onClick={() => alert("Playing!")}>Play Movie</button>
            <button onClick={() => console.log("This is in console")}>
                Console clicked
            </button>
        </div>
    );
}
