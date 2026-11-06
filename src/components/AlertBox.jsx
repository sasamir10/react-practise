export default function AlertBox({ message, children: childrennn }) {
    function handleClick() {
        alert(message);
    }

    return (
        <>
            <button onClick={handleClick}>{childrennn}</button>
        </>
    );
}
