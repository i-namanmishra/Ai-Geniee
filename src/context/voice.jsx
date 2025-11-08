import React, { useContext, useState } from 'react';
import { Context } from "../context/context";
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import './voice.css';

export const VoiceSearch = () => {
    const { sent, setInput } = useContext(Context);
    const [isListening, setIsListening] = useState(false);

    const startVoiceSearch = () => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = () => {
                setIsListening(true);
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                setIsListening(false);
                sent(transcript);
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false);
            };

            recognition.onend = () => {
                setIsListening(false);
            };

            recognition.start();
        } else {
            alert('Speech recognition not supported in this browser');
        }
    };

    return (
        <button 
            onClick={startVoiceSearch} 
            className={`voice-search-btn ${isListening ? 'listening' : ''}`}
        >
            {isListening ? (
                <FaMicrophoneSlash className="voice-icon voice-icon-listening" />
            ) : (
                <FaMicrophone className="voice-icon" />
            )}
        </button>
    );
};