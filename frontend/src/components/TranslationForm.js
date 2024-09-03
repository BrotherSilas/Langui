import React, { useState } from 'react';
import '../styles/TranslationForm.css';

function TranslationForm() {
    const [phrase, setPhrase] = useState('');
    const [language, setLanguage] = useState('es');
    const [translation, setTranslation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://www.fourtonfish.com/hellosalut/hello/?lang=${language}`)
            .then(response => response.json())
            .then(data => setTranslation(data.hello))
            .catch(error => setTranslation('Error fetching translation.'));
    };

    return (
        <div className="translation-container">
            <h1>Langui Translation Tool</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="phrase-input">Enter your phrase:</label>
                <input
                    type="text"
                    id="phrase-input"
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                    placeholder="Type a phrase..."
                />
                <label htmlFor="language-select">Choose a language:</label>
                <select
                    id="language-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="zh">Chinese</option>
                </select>
                <button type="submit">Translate</button>
            </form>
            <div id="translation-result">Translation: {translation}</div>
        </div>
    );
}

export default TranslationForm;
