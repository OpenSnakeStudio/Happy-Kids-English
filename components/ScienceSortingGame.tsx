
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { VocabularyItem } from '../types';
import { playSFX } from '../services/audioService';

interface ScienceSortingGameProps {
  vocabulary: VocabularyItem[];
  onFinish: () => void;
  onExit: () => void;
}

export const ScienceSortingGame: React.FC<ScienceSortingGameProps> = ({ vocabulary, onFinish, onExit }) => {
  const [items, setItems] = useState<VocabularyItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong'>('playing');

  useEffect(() => {
    // Get unique categories from vocabulary
    const cats = Array.from(new Set(vocabulary.map(v => v.partOfSpeech)));
    setCategories(cats);
    setItems([...vocabulary].sort(() => Math.random() - 0.5));
  }, [vocabulary]);

  const handleSort = (category: string) => {
    if (status !== 'playing') return;

    const currentItem = items[currentItemIndex];
    if (currentItem.partOfSpeech === category) {
      setStatus('correct');
      playSFX('correct');
      setScore(s => s + 1);
      
      if (currentItemIndex === items.length - 1) {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        playSFX('win');
        setTimeout(onFinish, 2000);
      } else {
        setTimeout(() => {
          setCurrentItemIndex(i => i + 1);
          setStatus('playing');
        }, 800);
      }
    } else {
      setStatus('wrong');
      playSFX('wrong');
      setTimeout(() => setStatus('playing'), 1000);
    }
  };

  if (items.length === 0) return null;

  const currentItem = items[currentItemIndex];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => { playSFX('click'); onExit(); }} className="text-gray-500 hover:text-red-500 font-bold bg-white px-4 py-2 rounded-full shadow-sm">
          ✕ 離開
        </button>
        <h2 className="text-2xl font-black text-green-600 tracking-wider">
          🧪 分類大挑戰
        </h2>
        <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-bold">
          {currentItemIndex + 1} / {items.length}
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border-b-8 border-green-100 mb-10 text-center relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-2 bg-green-500 transition-all duration-300" style={{ width: `${(currentItemIndex / items.length) * 100}%` }}></div>
        
        <div className={`text-8xl mb-4 transition-transform ${status === 'correct' ? 'scale-125' : ''} ${status === 'wrong' ? 'animate-shake' : ''}`}>
          {currentItem.emoji}
        </div>
        <h3 className="text-4xl font-black text-gray-800 mb-2">{currentItem.word}</h3>
        <p className="text-gray-500 font-medium">{currentItem.chinese}</p>
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">請歸類到正確的容器 (Sort into Categories)</p>
      </div>

      <div className={`grid grid-cols-1 ${categories.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => handleSort(cat)}
            className={`
              p-6 rounded-2xl border-b-8 transition-all transform active:scale-95 active:border-b-0 active:translate-y-2
              ${status === 'playing' ? 'bg-white border-green-200 text-gray-700 hover:bg-green-50 hover:-translate-y-1' : ''}
              ${status === 'correct' && currentItem.partOfSpeech === cat ? 'bg-green-500 border-green-700 text-white scale-105' : ''}
              ${status === 'wrong' && currentItem.partOfSpeech !== cat ? 'bg-gray-100 border-gray-200 text-gray-300 opacity-50' : ''}
              ${status === 'correct' && currentItem.partOfSpeech !== cat ? 'bg-gray-100 border-gray-200 text-gray-300 opacity-50' : ''}
            `}
          >
            <div className="text-3xl mb-2">📦</div>
            <span className="text-xl font-black">{cat}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
