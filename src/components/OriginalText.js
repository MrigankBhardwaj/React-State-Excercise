import React from "react";

const OriginalText = (props) => {
    let originalText = props.text ? <>Original text is - <strong>{props.text}</strong></> : "";
    let wordsCountText = props.wordsCount ? <>Total number of words are - <strong>{props.wordsCount}</strong></> : "";
    let charactersCountText = props.charactersCount ? <>Total number of characters are - <strong>{props.charactersCount}</strong></> : "";
    return (
        <div className="container mb-3">
            <p> {originalText}</p>
            <p>   {wordsCountText}</p>
            <p>{charactersCountText}</p>
        </div>
    )
}
export default OriginalText;