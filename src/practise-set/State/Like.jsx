import { useState } from "react";

export default function Like() {
    const [like, setLike] = useState(100);

    function myFunction() {
        setLike(like + 1);
    }

    return (
        <>
            <h3>{like}</h3>
            <button onClick={myFunction}>Increase</button>
        </>
    );
}
