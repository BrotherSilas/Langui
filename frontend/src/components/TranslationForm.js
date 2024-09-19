import React, { useState } from 'react';
import '../styles/TranslationForm.css';

function TranslationForm() {
    // State variables for phrase input, selected language, and translation result
    const [phrase, setPhrase] = useState('');
    const [language, setLanguage] = useState('es');
    const [translation, setTranslation] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch translation from mymemory.translated.net API
        fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(phrase)}&langpair=en|${language}`)
            .then(response => response.json())
            .then(data => {
                if (data.responseData) {
                    setTranslation(data.responseData.translatedText);
                } else {
                    setTranslation('Error: Unable to fetch translation.');
                }
            })
            .catch(error => setTranslation('Error fetching translation.'));
    };

    return (
        <div className="translation-container">
            <h1>Langui Translation Tool</h1>
            <form onSubmit={handleSubmit}>
                {/* Phrase input field */}
                <label htmlFor="phrase-input">Enter your phrase:</label>
                <input
                    type="text"
                    id="phrase-input"
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                    placeholder="Type a phrase..."
                    required
                />
                
                {/* Language selection dropdown */}
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
                
                {/* Submit button */}
                <button type="submit">Translate</button>
            </form>
            
            {/* Translation result display */}
            <div id="translation-result">
                {translation && <p>Translation: {translation}</p>}
            </div>
        </div>
    );
}

export default TranslationForm;