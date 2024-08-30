import React from 'react';
function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-center">
            <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/simple-counter">Counter</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/text-to-speech">Text To Speech</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
