
import React from 'react';
import { GradeLevel } from '../types';
import { SCIENCE_TOPICS } from '../data/scienceTopics';
import { playSFX } from '../services/audioService';

interface ScienceTopicSelectionProps {
  grade: GradeLevel;
  onSelectTopic: (topic: string) => void;
  onBack: () => void;
}

export const ScienceTopicSelection: React.FC<ScienceTopicSelectionProps> = ({ grade, onSelectTopic, onBack }) => {
  const topics = SCIENCE_TOPICS[grade] || [];

  // Determine stage description based on grade
  let stageTitle = "";
  let stageDesc = "";
  if (grade <= 2) {
    stageTitle = "啟蒙探索期 (Life Science)";
    stageDesc = "透過觀察與遊戲，發現生活中的科學秘密！";
  } else if (grade <= 4) {
    stageTitle = "基礎觀念期 (Basic Science)";
    stageDesc = "學習分類、觀察規律，認識電、光與生物！";
  } else {
    stageTitle = "實驗與系統期 (Advanced Science)";
    stageDesc = "設計實驗驗證假設，探討機械、化學與生態！";
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
        <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-2">
          {stageTitle}
        </div>
        <h2 className="text-4xl font-bold text-green-600 mb-4">
           {grade} 年級自然科學
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
            className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-green-500 hover:bg-green-50 hover:scale-[1.02] hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-700 group-hover:text-green-700">
                {topic}
              </span>
              <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                🔬
              </span>
            </div>
          </button>
        ))}
        
        {/* Surprise Me Option */}
        <button
            onClick={() => { playSFX('click'); onSelectTopic("Surprise Me"); }}
            className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 rounded-2xl shadow-md border-l-8 border-green-700 hover:brightness-110 hover:scale-[1.02] transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">
                🌱 給我一個科學驚喜 (Surprise Me)
              </span>
              <span className="text-2xl text-white">
                🧪
              </span>
            </div>
          </button>
      </div>
    </div>
  );
};
