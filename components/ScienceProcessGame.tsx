
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { VocabularyItem } from '../types';
import { playSFX } from '../services/audioService';

interface ScienceProcessGameProps {
  vocabulary: VocabularyItem[];
  onFinish: () => void;
  onExit: () => void;
}

export const ScienceProcessGame: React.FC<ScienceProcessGameProps> = ({ vocabulary, onFinish, onExit }) => {
  const [shuffledItems, setShuffledItems] = useState<VocabularyItem[]>([]);
  const [orderedItems, setOrderedItems] = useState<VocabularyItem[]>([]);
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong'>('playing');

  useEffect(() => {
    // The vocabulary from AI is already in correct chronological order
    setShuffledItems([...vocabulary].sort(() => Math.random() - 0.5));
    setOrderedItems([]);
    setStatus('playing');
  }, [vocabulary]);

  const handleItemClick = (item: VocabularyItem, fromSource: boolean) => {
    if (status !== 'playing') return;
    playSFX('click');

    if (fromSource) {
      setShuffledItems(prev => prev.filter(i => i.word !== item.word));
      setOrderedItems(prev => [...prev, item]);
    } else {
      setOrderedItems(prev => prev.filter(i => i.word !== item.word));
      setShuffledItems(prev => [...prev, item]);
    }
  };

  const checkAnswer = () => {
    const isCorrect = orderedItems.every((item, idx) => item.word === vocabulary[idx].word);
    
    if (isCorrect) {
      setStatus('correct');
      playSFX('correct');
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      playSFX('win');
      setTimeout(onFinish, 2000);
    } else {
      setStatus('wrong');
      playSFX('wrong');
      setTimeout(() => {
        setStatus('playing');
        // Return all items to pool if wrong for a fresh retry
        setShuffledItems([...vocabulary].sort(() => Math.random() - 0.5));
        setOrderedItems([]);
      }, 1500);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => { playSFX('click'); onExit(); }} className="text-gray-500 hover:text-red-500 font-bold bg-white px-4 py-2 rounded-full shadow-sm">
          ✕ 離開
        </button>
        <h2 className="text-2xl font-black text-emerald-600 tracking-wider">
          🌱 流程排序王
        </h2>
        <div className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full font-bold">
          順序排列
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl border-b-8 border-emerald-100 mb-10">
        <div className="text-center mb-6">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">請依序排列科學流程 (Order the Steps)</p>
        </div>

        {/* Target Area */}
        <div className={`
          min-h-[160px] p-4 rounded-2xl bg-emerald-50 border-4 border-dashed flex flex-wrap items-center justify-center gap-4 transition-all
          ${status === 'correct' ? 'border-green-400 bg-green-100' : 'border-emerald-200'}
          ${status === 'wrong' ? 'border-red-400 bg-red-50 animate-shake' : ''}
        `}>
          {orderedItems.length === 0 && <span className="text-emerald-300 font-bold">點擊下方的積木...</span>}
          {orderedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <button
                onClick={() => handleItemClick(item, false)}
                className="bg-white p-4 rounded-xl shadow-md border-b-4 border-emerald-200 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-1">{item.emoji}</div>
                <div className="font-bold text-gray-700">{item.word}</div>
              </button>
              {idx < vocabulary.length - 1 && <span className="text-2xl text-emerald-200">➜</span>}
            </div>
          ))}
        </div>

        {/* Pool Area */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {shuffledItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleItemClick(item, true)}
              className="bg-emerald-500 text-white p-4 rounded-xl shadow-lg border-b-4 border-emerald-700 hover:brightness-110 hover:-translate-y-1 active:scale-95 transition-all"
            >
              <div className="text-3xl mb-1">{item.emoji}</div>
              <div className="font-bold">{item.word}</div>
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={checkAnswer}
          disabled={orderedItems.length !== vocabulary.length || status !== 'playing'}
          className={`
            w-full mt-10 py-4 rounded-xl font-black text-xl shadow-lg transition-all
            ${orderedItems.length === vocabulary.length 
              ? 'bg-yellow-400 text-yellow-900 hover:brightness-105 active:scale-95' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
          `}
        >
          {orderedItems.length === vocabulary.length ? '完成排列！' : `還差 ${vocabulary.length - orderedItems.length} 個步驟...`}
        </button>
      </div>
    </div>
  );
};
