import { useEffect, useRef } from 'react';

const ConsoleWelcome = () => {
    const hasLogged = useRef(false);

    useEffect(() => {
        if (hasLogged.current) return;
        hasLogged.current = true;

        const styleTitle = [
            'font-size: 16px',
            'font-weight: bold',
            'font-family: monospace',
            'color: #3b82f6',
            'text-shadow: 2px 2px 0px rgba(0,0,0,0.1)',
            'line-height: 1.2',
        ].join(';');

        const styleBody = [
            'font-size: 12px',
            'font-family: monospace',
            'color: #94a3b8',
            'line-height: 1.5',
        ].join(';');

        // Cleaner, more readable "KAUSHAL" ASCII art
        const asciiArt = `
  _  __               _           _ 
 | |/ /__ _ _   _ ___| |__   __ _| |
 | ' // _\` | | | / __| '_ \\ / _\` | |
 | . \\ (_| | |_| \\__ \\ | | | (_| | |
 |_|\\_\\__,_|\\__,_|___/_| |_|\\__,_|_|
`;

        console.log(
            `%c${asciiArt}\n%c\n👋 Hacking around?\n\nI see you're checking under the hood! 🧐\n\nIf you're curious about a specific component or animation,\nI built this using React, Tailwind v4, and Framer Motion.\n\nFound a bug or just want to chat engineering?\nLet's connect: https://www.linkedin.com/in/kaushaldontula/\n`,
            styleTitle,
            styleBody
        );
    }, []);

    return null;
};

export default ConsoleWelcome;
