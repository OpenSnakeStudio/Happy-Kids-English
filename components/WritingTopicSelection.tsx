
import React from 'react';
import { GradeLevel } from '../types';
import { WRITING_TOPICS } from '../data/writingTopics';
import { playSFX } from '../services/audioService';

interface WritingTopicSelectionProps {
  grade: GradeLevel;
  onSelectTopic: (topic: string) => void;
  onBack: () => void;
}

export const WritingTopicSelection: React.FC<WritingTopicSelectionProps> = ({ grade, onSelectTopic, onBack }) => {
  const topics = WRITING_TOPICS[grade] || [];

  // Determine stage description based on grade
  let stageTitle = "";
  let stageDesc = "";
  if (grade <= 2) {
    stageTitle = "萌芽期 (Beginner)";
    stageDesc = "從造句與看圖說話開始，練習把話說完整！";
  } else if (grade <= 4) {
    stageTitle = "發展期 (Intermediate)";
    stageDesc = "學習段落結構與修辭，讓文章更生動！";
  } else {
    stageTitle = "成熟期 (Advanced)";
    stageDesc = "練習多元文體與邏輯思考，寫出有深度的文章！";
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-6 animate-fade-in-up">
      <button 
        onClick={() => { playSFX('click'); onBack(); }}
        className="mb-8 text-gray-400 hover:text-gray-600 font-bold flex items-center gap-2 transition-colors"
      >
        ⬅️ 重選年級 (Back to Grades)
      </button>

      <div className="text-center mb-10">
        <div className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold mb-2">
          {stageTitle}
        </div>
        <h2 className="text-4xl font-bold text-pink-600 mb-4">
           {grade} 年級寫作練習
        </h2>
        <p className="text-xl text-gray-500">
          {stageDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => { playSFX('click'); onSelectTopic(topic); }}
            className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-pink-400 hover:bg-pink-50 hover:scale-[1.02] hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-700 group-hover:text-pink-700">
                {topic}
              </span>
              <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                📝
              </span>
            </div>
          </button>
        ))}
        
        {/* Surprise Me Option */}
        <button
            onClick={() => { playSFX('click'); onSelectTopic("Surprise Me"); }}
            className="bg-gradient-to-r from-pink-400 to-rose-400 p-6 rounded-2xl shadow-md border-l-8 border-pink-700 hover:brightness-110 hover:scale-[1.02] transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">
                ✨ 給我一個寫作驚喜 (Surprise Me)
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
