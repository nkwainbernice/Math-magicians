import React from "react";
import ReactDom from "react-dom/client";
import Calculator from "./Calculator";


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Calculator/>
    </React.StrictMode>
);