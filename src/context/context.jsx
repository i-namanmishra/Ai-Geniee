import { createContext, useState } from "react";
import run from "../config/genie";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recent, setRecent] = useState("");
    const [prev, setPrev] = useState([]);
    const [result, setResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const formatText = (text) => {
        const lines = text.split('\n');
        const formattedLines = lines.map(line => {
            line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            line = line.replace(/\*/g, '');
            if (line.trim().length > 0 && !line.includes(':') && !line.includes('<strong>')) {
                return `<strong>${line.trim()}</strong>`;
            }
            return line;
        });
        return formattedLines.join('<br/>');
    };

    const delay = (idx, next) => {
        setTimeout(() => {
            setResultData(prev => prev + next);
        }, 75 * idx);
    };

    const sent = async (prompt) => {
        const searchPrompt = typeof prompt === 'string' ? prompt : input;
        
        if (!searchPrompt || searchPrompt.trim() === '') return;

        try {
            setResultData("");
            setLoading(true);
            setResult(true);
            setRecent(searchPrompt);

            const response = await run(searchPrompt);
            const formattedResponse = formatText(response);
            const words = formattedResponse.split(/(\s+)/).filter(word => word.length > 0);

            for (let i = 0; i < words.length; i++) {
                delay(i, words[i]);
            }

            setPrev(prev => [...prev, {
                input: searchPrompt,
                response: formattedResponse
            }]);
        } catch (error) {
            console.error("Error processing message:", error);
            setResultData("An error occurred while processing your message.");
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const newChat = () => {
        setInput("");
        setRecent("");
        setResult(false);
        setLoading(false);
        setResultData("");
    };

    const contextValue = {
        input,
        setInput,
        recent,
        setRecent,
        setPrev,
        prev,
        result,
        loading,
        resultData,
        sent,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;