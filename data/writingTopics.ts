
import { GradeLevel } from "../types";

export const WRITING_TOPICS: Record<GradeLevel, string[]> = {
  [GradeLevel.ONE]: [
    "造句練習 (Sentence Making)",
    "標點符號大冒險 (Punctuation)",
    "看圖說話 (Picture Description)",
    "心情小日記 (My Diary)",
    "簡單的譬喻 (Simple Similes)",
    "連接詞運用 (Connectors)"
  ],
  [GradeLevel.TWO]: [
    "形容詞大變身 (Adjectives)",
    "我會寫自我介紹 (Self Introduction)",
    "觀察力培養 (Observation)",
    "把句子變長 (Expanding Sentences)",
    "對話練習 (Dialogue Writing)",
    "創意想像 (Creative Imagination)"
  ],
  [GradeLevel.THREE]: [
    "段落的開始與結束 (Paragraphs)",
    "五感摹寫：視覺與聽覺 (Sensory)",
    "人物描寫技巧 (Describing People)",
    "擬人法與排比法 (Rhetoric)",
    "記敘文：難忘的一件事 (Narrative)",
    "成語運用 (Using Idioms)"
  ],
  [GradeLevel.FOUR]: [
    "動作描寫細節 (Action Details)",
    "寫景技巧 (Describing Scenery)",
    "記敘文：我最喜歡的物品 (Objects)",
    "順敘法練習 (Chronological Order)",
    "心情轉折描寫 (Emotional Changes)",
    "誇飾修辭法 (Hyperbole)"
  ],
  [GradeLevel.FIVE]: [
    "說明文：介紹事物 (Expository)",
    "文章結構：起承轉合 (Structure)",
    "倒敘法運用 (Flashback)",
    "讀書心得寫作 (Book Report)",
    "書信與應用文 (Letters)",
    "客觀與主觀 (Objective vs Subjective)"
  ],
  [GradeLevel.SIX]: [
    "議論文：發表觀點 (Argumentative)",
    "藉物抒情技巧 (Symbolism)",
    "名言佳句引用 (Quotes)",
    "論證與舉例 (Arguments & Examples)",
    "反思與成長 (Reflection)",
    "綜合修辭運用 (Advanced Rhetoric)"
  ]
};
