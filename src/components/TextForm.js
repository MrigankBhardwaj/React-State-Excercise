import React, { useState } from "react";
import OriginalText from "./OriginalText";
const TextForm = (props) => {
    const [text, setText] = useState("");
    const [originalText, setOriginalText] = useState("");
    const [wordsCount, setWordsCount] = useState(0);
    /**
     * Handles the changes in the text area
     * @param {*} event 
     */
    const handleChange = (event) => {
        setText(event.target.value);
    };
    /**
     * Below function changes the text in the text area to the UpperCase
     */
    const handleUpperCaseClick = () => {
        let upperCaseText = text.toUpperCase(); // Updated the value of text to UpperCase
        setText(upperCaseText); // Set the updated text 
        setOriginalText(text); // Pass the state to the child component
    };
    /**
     * Below function changes the text in the text area to the lowercase
     */
    const handleLowerCaseClick = () => {
        let lowerCaseText = text.toLowerCase(); // Change the text to the lowercase
        setText(lowerCaseText); // Updated the value of text 
        setOriginalText(text); // Pass the state to the child component
    };
    /**
     * Below function clear all the text in the text area
     */
    const handleClearClick = () => {
        let clearText = ""; // Clears the text in the text area
        setText(clearText); // Update the new text value
        window.location.reload(false); // Refresh the page -- This method takes an optional parameter which by default is set to false. If set to true, the browser will do a complete page refresh from the server and not from the cached version of the page.
    };
    const numberOfWords = () => {
        let numberOfWords = text.split(" ");
        console.log(numberOfWords.length);
        setOriginalText(text);
        setWordsCount(numberOfWords.length);
    }
    return (
        <div>
            <div className="mb-3">
                <h3 className="text-area-heading">{props.heading}</h3>
                <textarea className="form-control" id="textArea" value={text} onChange={handleChange} rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Change Text To UpperCase</button>
            <button className="btn btn-light mx-2" onClick={handleLowerCaseClick}>Chnage Text To LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            <button type="button" className="btn btn-success" onClick={numberOfWords}>Number Of Words</button>
            {/* Below we pass the state as the props to child component */}
            <OriginalText text={originalText} wordsCount={wordsCount}/>
            {/* Above we have passed the state as props to the child component */}
        </div>
    )
}
export default TextForm;