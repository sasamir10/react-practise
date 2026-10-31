export default function TodoList() {
    let color = {
        backgroundColor: "purple",
    };

    let color2 = {
        backgroundColor: "blue",
    };

    const colors = "blue";

    return (
        <div style={colors === "blue" ? color2 : color}>
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}
