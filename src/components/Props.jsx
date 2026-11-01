export default function Props({ person, size }) {
    return (
        <>
            <h1>{person.name}</h1>
            <p>{person.imageId}</p>

            <div>{size}</div>
        </>
    );
}
