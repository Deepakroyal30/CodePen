import React, { useReducer, useState } from 'react';
import './App.css'; // Import your CSS file for styling

const initialState = {
  darkMode: false,
  text: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'UPDATE_TEXT':
      return { ...state, text: action.payload };
    case 'APPLY_UPPERCASE':
      return { ...state, text: state.text.toUpperCase() };
    case 'APPLY_LOWERCASE':
      return { ...state, text: state.text.toLowerCase() };
    case 'COPY_TO_CLIPBOARD':
      navigator.clipboard.writeText(state.text);
      return state;
    case 'CLEAR_TEXT':
      return { ...state, text: '' };
    case 'REMOVE_EXTRA_SPACES':
      return { ...state, text: state.text.replace(/\s+/g, ' ').trim() };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputText, setInputText] = useState('');

  const handleDarkModeToggle = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  const handleTextChange = (event) => {
    setInputText(event.target.value);
    dispatch({ type: 'UPDATE_TEXT', payload: event.target.value });
  };

  const handleButtonClick = (actionType) => {
    dispatch({ type: actionType });
  };
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };
  const countCharacters = (text) => {
    return text.length;
  };
  const calculateReadingTime = (text) => {
    const words = countWords(text);
    const milliseconds = (words / 200) * 60 * 1000; 
    return Math.ceil(milliseconds / 60000); 
  };

  return (
    <div className={state.darkMode ? 'app dark-mode' : 'app'}>
      <nav>
        <div><h1>Text Utils</h1></div>
        <div>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className="toggle-container">
          <span className="toggle-label">Enable Dark Mode</span>
          <input type="checkbox" className="toggle-checkbox" id="darkModeToggle" checked={state.darkMode} onChange={handleDarkModeToggle} />
          <label className="toggle-slider" htmlFor="darkModeToggle"></label>
        </div>
      </nav>
      <main className={state.darkMode ? 'main dark-mode' : 'main'}>
        <h1>Text Utils - Word Counter, Character Counter, Remove Extra Space</h1>
        <textarea value={state.text} onChange={handleTextChange} placeholder="Enter text..." />
        <div className="button-container">
          <button onClick={() => handleButtonClick('APPLY_UPPERCASE')}>Uppercase</button>
          <button onClick={() => handleButtonClick('APPLY_LOWERCASE')}>Lowercase</button>
          <button onClick={() => handleButtonClick('COPY_TO_CLIPBOARD')}>Copy to Clipboard</button>
          <button onClick={() => handleButtonClick('CLEAR_TEXT')}>Clear Text</button>
          <button onClick={() => handleButtonClick('REMOVE_EXTRA_SPACES')}>Remove Extra Spaces</button>
        </div>
        <div className="info-container">
          <p>Number of words: {countWords(state.text)}</p>
          <p>Number of characters: {countCharacters(state.text)}</p>
          <p>Reading time: {calculateReadingTime(state.text)} minutes</p>
        </div>
        <div className="preview-container">
  <h2>Preview</h2>
  <div className="text-preview">
    <textarea readOnly value={state.text} cols="50" rows="3"></textarea>
  </div>
</div>
      </main>
    </div>
  );
}

export default App;
