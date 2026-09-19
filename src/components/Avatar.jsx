export default function Avatar({ person, size = 0 }) {
    return (
        <>
            <h1>{person.name}</h1>
            <p>{person.imageId}</p>

            <div>{size}</div>
        </>
    );
}
