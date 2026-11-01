import Product from "./components/Product";

function App() {
    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Headphones", price: 3000 },
    ];

    return (
        <div>
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default App;
