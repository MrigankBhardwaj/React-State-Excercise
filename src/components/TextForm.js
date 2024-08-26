import React, { useState } from "react";
import OriginalText from "./OriginalText";
import "../style.css";
const TextForm = (props) => {
    const [text, setText] = useState("");
    const [originalText, setOriginalText] = useState("");
    const [wordsCount, setWordsCount] = useState(0);
    const [charactersCount, setCharactersCount] = useState(0);
    const [jsonText, setJsonText] = useState("");
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
    /**
     * Below function counts the number of words;
     */
    const numberOfWords = () => {
        let numberOfWords = text.split(" ");
        setOriginalText(text);
        setWordsCount(numberOfWords.length);
    }
    /**
     * Below function counts the number of character
     */
    const numberOfCharacters = () => {
        let characterNumbers = text.length;
        setOriginalText(text);
        setCharactersCount(characterNumbers);
    }
    /**
     * Below function clears the extra spaces that you have given
     */
    const clearExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(" "));
    }
    /**
     * Below function copy the text present in the text area
     */
    const copyText = () => {
        let newText =  document.getElementById("textArea");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const formatJson = () => {
        let jsonTextUp = JSON.parse(text)
        const prettyJson = JSON.stringify(jsonTextUp, null, 2);
        console.log(jsonTextUp);
        setJsonText(prettyJson);
    }
    return (
        <div>
            <div className="mb-3">
                <h3 className="text-area-heading">{props.heading}</h3>
                <textarea className="form-control" id="textArea" value={text} onChange={handleChange} rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Change Text To UpperCase</button>
            <button className="btn btn-secondary mx-2" onClick={handleLowerCaseClick}>Chnage Text To LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            <button type="button" className="btn btn-success mx-2" onClick={numberOfWords}>Number Of Words</button>
            <button type="button" className="btn btn-dark mx-2" onClick={numberOfCharacters}>Number Of Characters</button>
            <button type="button" className="btn btn-warning mx-2" onClick={clearExtraSpaces}>Clear Extra Spaces</button>
            <button type="button" className="btn btn-success mx-2" onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-success mx-2" onClick={formatJson}>Formate JSON</button>
            {/* Below we pass the state as the props to child component */}
            <OriginalText text={originalText} wordsCount={wordsCount} charactersCount={charactersCount} />
            {/* Above we have passed the state as props to the child component */}
            <textarea rows={10} className="form-control json-output" id="jsonData" value={jsonText} readOnly></textarea>
        </div>
    )
}
export default TextForm;