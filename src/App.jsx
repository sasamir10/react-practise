export default function App() {
    function handleGrandparent() {
        console.log("Grandparent Clicked");
    }

    function handleParent() {
        // event.stopPropagation();
        console.log("Parent Clicked");
    }

    function handleChild() {
        console.log("Child Clicked");
    }

    return (
        <>
            <div onClickCapture={handleGrandparent}>
                <div onClickCapture={handleParent}>
                    <button onClickCapture={handleChild}>Click me!</button>
                </div>
            </div>
        </>
    );
}
