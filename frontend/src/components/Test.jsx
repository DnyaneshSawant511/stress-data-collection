import { useState, useEffect } from 'react';

const Test = ({ paragraph, timing }) => {
  const [inputText, setInputText] = useState('');
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [timer, setTimer] = useState(timing);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isStarted && timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setIsCompleted(true);
    }
  }, [isStarted, timer]);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleChange = (e) => {
    if (isCompleted) return;

    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      setBackspaceCount(backspaceCount + 1);
    }

    setInputText(e.target.value);
  };

  const calculateWPM = () => {
    const wordsTyped = inputText.split(' ').filter(word => word.length > 0).length;
    const timeTaken = (timing - timer) / 60; // Time in minutes
    return timeTaken > 0 ? Math.round(wordsTyped / timeTaken) : 0;
  };

  const renderTextWithHighlights = () => {
    return paragraph.split('').map((char, index) => {
      let color = 'text-gray-500';
      if (inputText[index] === char) {
        color = 'text-green-500';
      } else if (inputText[index] !== undefined) {
        color = 'text-red-500';
      }
      return (
        <span key={index} className={color}>
          {char}
        </span>
      );
    });
  };

  return (
    <div>
      <p className="text-lg mb-4">{renderTextWithHighlights()}</p>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mt-4"
        rows="5"
        value={inputText}
        onChange={handleChange}
        disabled={!isStarted || isCompleted}
        placeholder="Start typing here..."
      />
      <button
        onClick={handleStart}
        disabled={isStarted}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Start
      </button>
      <div className="mt-4">
        <p>Time Left: {timer} seconds</p>
        <p>Backspaces: {backspaceCount}</p>
        {isCompleted && (
          <p>Typing Speed: {calculateWPM()} WPM</p>
        )}
      </div>
    </div>
  );
};

export default Test;
