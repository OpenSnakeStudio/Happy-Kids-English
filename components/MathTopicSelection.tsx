
import React from 'react';
import { GradeLevel } from '../types';
import { MATH_SYLLABUS } from '../data/mathSyllabus';
import { playSFX } from '../services/audioService';

interface MathTopicSelectionProps {
  grade: GradeLevel;
  onSelectTopic: (topic: string) => void;
  onBack: () => void;
}

export const MathTopicSelection: React.FC<MathTopicSelectionProps> = ({ grade, onSelectTopic, onBack }) => {
  const topics = MATH_SYLLABUS[grade] || [];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 animate-fade-in-up">
      <button
        onClick={() => { playSFX('click'); onBack(); }}
        className="mb-8 text-gray-400 hover:text-gray-600 font-bold flex items-center gap-2 transition-colors"
      >
        ⬅️ 重選年級 (Back to Grades)
      </button>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          {grade} 年級數學挑戰
        </h2>
        <p className="text-xl text-gray-500">
          請選擇一個單元來練習！
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => { playSFX('click'); onSelectTopic(topic); }}
            className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-blue-400 hover:bg-blue-50 hover:scale-[1.02] hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-700 group-hover:text-blue-700">
                {topic}
              </span>
              <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                🚀
              </span>
            </div>
          </button>
        ))}

        {/* Custom Topic Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-gray-300 flex items-center justify-between gap-4">
          <div className="flex flex-col flex-1">
            <span className="text-xs font-bold text-gray-400 uppercase mb-1">自訂主題 Custom</span>
            <input
              type="text"
              placeholder="例如：九九乘法進階..."
              className="w-full px-3 py-1.5 rounded-lg border-2 border-gray-50 focus:border-blue-400 focus:outline-none text-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const val = (e.target as HTMLInputElement).value;
                  if (val.trim()) { playSFX('click'); onSelectTopic(val.trim()); }
                }
              }}
            />
          </div>
          <button
            onClick={(e) => {
              const input = e.currentTarget.parentElement?.querySelector('input') as HTMLInputElement;
              if (input.value.trim()) { playSFX('click'); onSelectTopic(input.value.trim()); }
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-sm"
          >
            GO
          </button>
        </div>

        {/* Surprise Me Option */}
        <button
          onClick={() => { playSFX('click'); onSelectTopic("Surprise Me"); }}
          className="bg-gradient-to-r from-blue-400 to-indigo-500 p-6 rounded-2xl shadow-md border-l-8 border-blue-700 hover:brightness-110 hover:scale-[1.02] transition-all text-left group"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-white">
              📐 給我一個數學驚喜 (Surprise Me)
            </span>
            <span className="text-2xl text-white">
              🎲
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
