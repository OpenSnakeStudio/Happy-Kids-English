
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { VocabularyItem } from '../types';
import { playSFX } from '../services/audioService';

interface WordScrambleGameProps {
  vocabulary: VocabularyItem[];
  onFinish: () => void;
  onExit: () => void;
}

interface LetterObj {
  char: string;
  id: number; // Unique ID to handle duplicate letters
}

export const WordScrambleGame: React.FC<WordScrambleGameProps> = ({ vocabulary, onFinish, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [poolLetters, setPoolLetters] = useState<LetterObj[]>([]);
  const [answerLetters, setAnswerLetters] = useState<LetterObj[]>([]);
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong'>('playing');

  const currentWord = vocabulary[currentIndex];

  useEffect(() => {
    // Reset for new word
    const word = currentWord.word.trim();
    // Create letter objects with unique IDs
    const letters = word.split('').map((char, idx) => ({ char, id: idx }));
    // Shuffle for the pool
    const shuffled = [...letters].sort(() => Math.random() - 0.5);

    setPoolLetters(shuffled);
    setAnswerLetters([]);
    setStatus('playing');
  }, [currentIndex, currentWord]);

  const speak = (text: string, speed: number = 0.9) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = speed;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePoolClick = (letter: LetterObj) => {
    if (status !== 'playing') return;
    playSFX('click');
    setPoolLetters(prev => prev.filter(l => l.id !== letter.id));
    setAnswerLetters(prev => [...prev, letter]);
  };

  const handleAnswerClick = (letter: LetterObj) => {
    if (status !== 'playing') return;
    playSFX('click');
    setAnswerLetters(prev => prev.filter(l => l.id !== letter.id));
    setPoolLetters(prev => [...prev, letter]);
  };

  const handleUndo = () => {
    if (status !== 'playing' || answerLetters.length === 0) return;
    playSFX('click');
    const lastLetter = answerLetters[answerLetters.length - 1];
    setAnswerLetters(prev => prev.slice(0, -1));
    setPoolLetters(prev => [...prev, lastLetter]);
  };

  const handleReset = () => {
    if (status !== 'playing' || answerLetters.length === 0) return;
    playSFX('click');
    // Return all answer letters to the pool
    setPoolLetters(prev => [...prev, ...answerLetters]);
    setAnswerLetters([]);
  };

  // Auto-check when all letters are used
  useEffect(() => {
    if (poolLetters.length === 0 && answerLetters.length > 0 && status === 'playing') {
      checkAnswer();
    }
  }, [poolLetters, answerLetters, status]);

  // Keyboard support for Undo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' && status === 'playing' && answerLetters.length > 0) {
        handleUndo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [answerLetters, status, handleUndo]);

  const checkAnswer = () => {
    const currentString = answerLetters.map(l => l.char).join('');
    const targetString = currentWord.word.trim();

    if (currentString.toLowerCase() === targetString.toLowerCase()) {
      setStatus('correct');
      playSFX('correct');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      speak("Correct!", 1);

      setTimeout(() => {
        if (currentIndex < vocabulary.length - 1) {
          setCurrentIndex(p => p + 1);
        } else {
          playSFX('win');
          onFinish();
        }
      }, 1500);
    } else {
      setStatus('wrong');
      playSFX('wrong');
      speak("Try again", 1);

      // Auto-reset after a short delay if wrong
      setTimeout(() => {
        setStatus('playing');
        setPoolLetters([...poolLetters, ...answerLetters].sort(() => Math.random() - 0.5));
        setAnswerLetters([]);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => { playSFX('click'); onExit(); }} className="text-gray-500 hover:text-red-500 font-bold bg-white px-4 py-2 rounded-full shadow-sm">
          ✕ 離開
        </button>
        <h2 className="text-2xl font-bold text-violet-600">
          🔤 字母大亂鬥
        </h2>
        <div className="text-sm font-bold bg-violet-100 text-violet-600 px-3 py-1 rounded-full">
          {currentIndex + 1} / {vocabulary.length}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center border-b-8 border-violet-100 min-h-[400px] flex flex-col">

        <div className="text-7xl mb-2 animate-bounce-slow">
          {currentWord.emoji}
        </div>
        <p className="text-gray-500 text-xl font-medium mb-8">
          {currentWord.chinese}
        </p>

        {/* Answer Area */}
        <div className={`
           flex flex-wrap justify-center gap-2 mb-8 p-4 rounded-2xl border-4 border-dashed min-h-[80px]
           ${status === 'correct' ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50'}
           ${status === 'wrong' ? 'border-red-400 bg-red-50 animate-shake' : ''}
        `}>
          {answerLetters.length === 0 && (
            <span className="text-gray-300 font-bold flex items-center">點擊字母拼出單字...</span>
          )}
          {answerLetters.map((l) => (
            <button
              key={l.id}
              onClick={() => handleAnswerClick(l)}
              className="w-12 h-12 bg-white rounded-xl text-2xl font-bold shadow-sm border-b-4 border-gray-300 text-gray-800 hover:-translate-y-1 transition-transform relative group"
              title="點擊移除"
            >
              {l.char}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 text-white text-[10px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
            </button>
          ))}
          {answerLetters.length > 0 && status === 'playing' && (
            <button
              onClick={handleUndo}
              className="w-12 h-12 bg-orange-100 rounded-xl text-xl font-bold shadow-sm border-b-4 border-orange-300 text-orange-600 hover:-translate-y-1 transition-transform flex items-center justify-center"
              title="回復上一步"
            >
              ↺
            </button>
          )}
        </div>

        {/* Pool Area */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {poolLetters.map((l) => (
            <button
              key={l.id}
              onClick={() => handlePoolClick(l)}
              className="w-14 h-14 bg-violet-500 rounded-xl text-3xl font-bold shadow-md border-b-4 border-violet-700 text-white hover:bg-violet-400 hover:-translate-y-1 active:border-b-0 active:translate-y-1 transition-all"
            >
              {l.char}
            </button>
          ))}
        </div>

        <div className="mt-auto flex justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            disabled={answerLetters.length === 0 || status !== 'playing'}
            className={`font-bold text-sm flex items-center gap-1 px-4 py-2 rounded-full transition-colors ${answerLetters.length === 0 || status !== 'playing'
              ? 'text-gray-300 bg-gray-50 cursor-not-allowed'
              : 'text-gray-500 hover:text-orange-600 bg-gray-50 hover:bg-orange-50'
              }`}
          >
            🧹 重填
          </button>
          <button
            type="button"
            onClick={() => speak(currentWord.word, 0.9)}
            className="text-gray-400 hover:text-sky-500 font-bold text-sm flex items-center gap-1 bg-gray-50 px-4 py-2 rounded-full"
          >
            🔊 Listen
          </button>
          <button
            type="button"
            onClick={() => speak(currentWord.word, 0.5)}
            className="text-gray-400 hover:text-green-600 font-bold text-sm flex items-center gap-1 bg-gray-50 px-4 py-2 rounded-full"
          >
            🐢 Slow
          </button>
        </div>
      </div>
    </div>
  );
};
