import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Like from "./practise-set/State/Like";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <Like />
    </StrictMode>,
);
