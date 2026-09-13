import React from 'react';
import './Popup.css'; // We will create this CSS file next

const Popup = ({ isVisible, score, onRestart }) => {
  // If the popup is not supposed to be visible, don't render anything
  
  if (isVisible()=='false') return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>🎉 Congratulations! 🎉</h2>
        <p>You cleared the game!</p>
        <p className="score-text">Your Score: <strong>{score}</strong></p>
        <button className="restart-button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Popup;