// Still needed to understand Web Speech API - Remember this
import React, { useState } from 'react'
import Speech from 'react-speech';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function TextToSpeech() {
    const [content, setContent] = useState("");
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return <h2>Your browser doesn't support speech recognition.</h2>
    }
    const handleChange = (event) => {
        setContent(event.target.value);
    }
    return (
        <div className='container my-5'>
            {/* Text To Speech */}
            <section className='text-to-speech '>
                <textarea className="form-control" id="textArea" rows="5" value={content} placeholder='Inter your text here.. NOTE : characters length < 250' maxLength={250} onChange={handleChange}></textarea>
                <Speech displayText="Convert To Speech" textAsButton={true} text={content} volume={0.2} voice="Google UK English Female" />
            </section>
            {/* Speech To Text */}
            <section className='voice-to-text my-5'>
                <div>
                <h5 className="display-4">Microphone : {listening ? "ON" : "OFF"}</h5>
                <button type="button" class="btn btn-primary mx-2" onClick={SpeechRecognition.startListening}>Start Recording</button>
                <button type="button" class="btn btn-warning mx-2" onClick={SpeechRecognition.stopListening}>Stop Recording</button>
                <button type="button" class="btn btn-danger mx-2" onClick={resetTranscript}>Reset Recording</button>
                <p>{transcript}</p>
                <textarea className="form-control" id="speechRecog" rows="5" value={transcript} readOnly/>
                </div>
            </section>
        </div>
    )
}
