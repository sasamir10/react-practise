export default function App() {
    const value = ["Messi", "Rohit", "Virat"];

    return (
        <>
            {value.map((product, index) => {
                return (
                    <>
                        <h2 key={index}> {product} </h2>
                        <p>{index}</p>
                    </>
                );
            })}
        </>
    );
}
