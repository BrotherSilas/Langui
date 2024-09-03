document.getElementById('translation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const phrase = document.getElementById('phrase-input').value;
    const language = document.getElementById('language-select').value;

    if (phrase.trim() === '') {
        alert('Please enter a phrase to translate.');
        return;
    }

    fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(phrase)}&langpair=en|${language}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('translation-result').textContent = `Translation: ${data.responseData.translatedText}`;
        })
        .catch(error => {
            document.getElementById('translation-result').textContent = 'Error fetching translation.';
            console.error('Error:', error);
        });
});
