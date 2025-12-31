
import React from 'react';
import { GradeLevel } from '../types';
import { ENGLISH_TOPICS } from '../data/englishTopics';
import { playSFX } from '../services/audioService';

interface EnglishTopicSelectionProps {
  grade: GradeLevel;
  onSelectTopic: (topic: string) => void;
  onBack: () => void;
}

export const EnglishTopicSelection: React.FC<EnglishTopicSelectionProps> = ({ grade, onSelectTopic, onBack }) => {
  const topics = ENGLISH_TOPICS[grade] || [];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 animate-fade-in-up">
      <button
        onClick={() => { playSFX('click'); onBack(); }}
        className="mb-8 text-gray-400 hover:text-gray-600 font-bold flex items-center gap-2 transition-colors"
      >
        ⬅️ Back to Grades (回年級選單)
      </button>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">
          Grade {grade} Themes
        </h2>
        <p className="text-xl text-gray-500">
          Choose a fun world to explore! (選一個有趣的世界！)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => { playSFX('click'); onSelectTopic(topic); }}
            className="bg-white p-6 rounded-3xl shadow-md border-b-8 border-teal-100 hover:bg-teal-50 hover:border-teal-300 hover:-translate-y-2 transition-all text-left group flex flex-col items-center text-center h-full justify-center"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {topic.includes('Animal') ? '🦁' :
                topic.includes('Rainbow') ? '🎨' :
                  topic.includes('Food') || topic.includes('Fruit') || topic.includes('Pizza') ? '🍕' :
                    topic.includes('Robot') ? '🤖' :
                      topic.includes('Family') ? '👨‍👩‍👧' :
                        topic.includes('School') || topic.includes('Classroom') ? '🏫' :
                          topic.includes('Superhero') ? '🦸‍♂️' :
                            topic.includes('Space') ? '🚀' :
                              topic.includes('Magic') ? '🧙‍♂️' :
                                topic.includes('Game') ? '🎮' :
                                  topic.includes('Block') ? '🧱' :
                                    '✨'}
            </div>
            <span className="text-lg font-bold text-gray-700 group-hover:text-teal-700 leading-tight">
              {topic}
            </span>
          </button>
        ))}

        {/* Custom Topic Card */}
        <div className="bg-white p-6 rounded-3xl shadow-md border-b-8 border-gray-200 flex flex-col items-center text-center h-full justify-center gap-3">
          <div className="text-4xl mb-1">✍️</div>
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">自訂主題 Custom</span>
          <div className="flex w-full gap-2">
            <input
              type="text"
              placeholder="Magic Island..."
              className="flex-1 min-w-0 px-3 py-2 rounded-xl border-2 border-gray-100 focus:border-teal-400 focus:outline-none text-sm font-medium"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const val = (e.target as HTMLInputElement).value;
                  if (val.trim()) { playSFX('click'); onSelectTopic(val.trim()); }
                }
              }}
            />
            <button
              onClick={(e) => {
                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                if (input.value.trim()) { playSFX('click'); onSelectTopic(input.value.trim()); }
              }}
              className="bg-teal-500 text-white px-3 py-2 rounded-xl font-bold hover:bg-teal-600 transition-colors"
            >
              GO
            </button>
          </div>
        </div>

        {/* Surprise Me Button */}
        <button
          onClick={() => { playSFX('click'); onSelectTopic("Surprise Me"); }}
          className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-3xl shadow-lg border-b-8 border-purple-700 hover:brightness-110 hover:-translate-y-2 transition-all text-left group flex flex-col items-center text-center h-full justify-center relative overflow-hidden"
        >
          {/* Sparkles decoration */}
          <div className="absolute top-2 right-2 text-white/30 text-2xl">✨</div>
          <div className="absolute bottom-2 left-2 text-white/30 text-2xl">✨</div>

          <div className="text-5xl mb-3 animate-bounce-slow filter drop-shadow-md">
            🎲
          </div>
          <span className="text-xl font-black text-white leading-tight drop-shadow-sm">
            Surprise Me! <br />
            (給我驚喜)
          </span>
        </button>
      </div>
    </div>
  );
};
