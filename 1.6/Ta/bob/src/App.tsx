import React from 'react';

const App: React.FC = () => {
    const hey = (message: string): string => {
        const trimmedMessage = message.trimRight();
        const isBoring = hearsBoring(trimmedMessage);
        const isFreaky = hearsFreaky(trimmedMessage);
        const isInquisitive = hearsInquisitive(trimmedMessage);

        if (isBoring) {
            return '¡Bien! ¡Sé así entonces!';
        }
        if (isFreaky && isInquisitive) {
            return '¡Tranquilo, sé lo que estoy haciendo!';
        }
        if (isFreaky) {
            return '¡Whoa, cálmate!';
        }
        if (isInquisitive) {
            return '¡Claro!';
        }
        return 'Lo que sea.';
    };

    const hearsBoring = (speech: string): boolean => {
        return speech.length === 0 || /^\s*$/.test(speech);
    };

    const hearsFreaky = (speech: string): boolean => {
        return /[A-Z]/.test(speech) && speech === speech.toUpperCase();
    };

    const hearsInquisitive = (speech: string): boolean => {
        return speech.endsWith('?');
    };

    const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputElement = e.currentTarget.querySelector('input[type="text"]');
        if (inputElement instanceof HTMLInputElement) {
            const message = inputElement.value;
            const response = hey(message);
            alert(response);
        }
    };

    return (
        <div className="app">
            <h1>ChatBot en React</h1>
            <form onSubmit={handleMessageSubmit}>
                <input type="text" placeholder="Escribe tu mensaje..." />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default App;
