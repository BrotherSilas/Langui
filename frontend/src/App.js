// Import React library
import React from 'react';

// Import the TranslationForm component
import TranslationForm from './components/TranslationForm.js';

// Define the main App component
function App() {
    return (
        // Render the main application container
        <div className="App">
            {/* Render the TranslationForm component */}
            <TranslationForm />
        </div>
    );
}

// Export the App component as the default export
export default App;