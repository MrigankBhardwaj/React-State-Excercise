import React from "react";
import TextForm from "./TextForm"

function App() {
    return (
        <div className="container my-3">
            <h1>React State</h1>
            <div>
                <TextForm heading={"Enter your text below"} />
            </div>
        </div>
    )
}

export default App;