import { useState, useEffect, useRef } from 'react';
import HardAudio1 from "../assets/audio/HardAudio1.mp4";
import MediumAudio1 from "../assets/audio/MediumAudio1.mp4";

const Test = ({ paragraph, timing, audioSrc }) => {
  const [inputText, setInputText] = useState('');
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [correctLetterCount, setCorrectLetterCount] = useState(0);
  const [timer, setTimer] = useState(timing);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isStarted && timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setIsCompleted(true);
      audioRef.current.pause();
    }
  }, [isStarted, timer]);

  const handleStart = () => {
    setIsStarted(true);
    audioRef.current.play();
  };

  const handleReset = () => {
    setInputText('');
    setBackspaceCount(0);
    setCorrectLetterCount(0);
    setTimer(timing);
    setIsStarted(false);
    setIsCompleted(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleChange = (e) => {
    if (isCompleted) return;

    const inputValue = e.target.value;

    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      setBackspaceCount(backspaceCount + 1);
    } else {
      const correctLetters = paragraph.split('').filter((char, index) => char === inputValue[index]);
      setCorrectLetterCount(correctLetters.length);
    }

    setInputText(inputValue);
  };

  const calculateWPM = () => {
    const wordsTyped = inputText.split(' ').filter(word => word.length > 0).length;
    const timeTaken = (timing - timer) / 60; // Time in minutes
    return timeTaken > 0 ? Math.round(wordsTyped / timeTaken) : 0;
  };

  const calculateErrorRate = () => {
    return correctLetterCount > 0 ? (backspaceCount / correctLetterCount).toFixed(2) : 0;
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
      <div className='flex w-full justify-center'>
        <p className="text-lg mb-4 w-[70%] text-center tracking-[1px]">{renderTextWithHighlights()}</p>
      </div>
      <div className='flex w-full justify-center'>
        <textarea
            className="w-[70%] p-2 border border-gray-300 rounded-xl mt-4"
            rows="5"
            value={inputText}
            onChange={handleChange}
            disabled={!isStarted || isCompleted}
            placeholder="Start typing here..."
        />
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <div className="flex gap-4">
            <button
                onClick={handleStart}
                disabled={isStarted}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
            >
                Start
            </button>
            <button
                onClick={handleReset}
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded"
            >
                Reset
            </button>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center">
            <p>Time Left: {timer} seconds</p>
            <p>Backspaces: {backspaceCount}</p>
            {isCompleted && (
              <>
                <p>Typing Speed: {calculateWPM()} WPM</p>
                <p>Error Rate: {calculateErrorRate()}</p>
              </>
            )}
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc} loop />
    </div>
  );
};

export default Test;
