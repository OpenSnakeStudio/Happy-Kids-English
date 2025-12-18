
import { GradeLevel } from "../types";

export const SCIENCE_TOPICS: Record<GradeLevel, string[]> = {
  [GradeLevel.ONE]: [
    "五官大發現 (Senses)",
    "光影捉迷藏 (Light & Shadow)",
    "神奇的磁鐵 (Magnets)",
    "水與浮沉 (Sink or Float)",
    "校園植物與種子 (Plants)",
    "風與空氣遊戲 (Wind & Air)"
  ],
  [GradeLevel.TWO]: [
    "吹泡泡與水的形狀 (Bubbles & Water)",
    "認識常見動物 (Animals)",
    "鏡子裡的秘密 (Mirrors)",
    "聲音的遊戲 (Sound)",
    "氣球與動力 (Balloon Power)",
    "天氣變變變 (Weather)"
  ],
  [GradeLevel.THREE]: [
    "植物的身體構造 (Parts of Plants)",
    "磁鐵的N極與S極 (Magnetic Poles)",
    "空氣佔有空間 (Air Properties)",
    "水的溶解 (Dissolving)",
    "認識氣溫與雲量 (Temperature & Clouds)",
    "動物的運動方式 (Animal Movement)"
  ],
  [GradeLevel.FOUR]: [
    "燈泡亮了：電路串聯與並聯 (Circuits)",
    "昆蟲的一生 (Life of Insects)",
    "光的反射與折射 (Reflection & Refraction)",
    "水生生物大搜查 (Aquatic Life)",
    "月亮變變變 (Moon Phases)",
    "毛細現象與虹吸 (Capillary Action)"
  ],
  [GradeLevel.FIVE]: [
    "熱的傳播：傳導對流輻射 (Heat Transfer)",
    "植物的繁殖 (Plant Reproduction)",
    "觀測星星與太陽 (Stars & Sun)",
    "聲音的產生與傳播 (Sound Waves)",
    "燃燒與氧氣 (Combustion & Oxygen)",
    "動物的行為與生存 (Animal Behavior)"
  ],
  [GradeLevel.SIX]: [
    "簡單機械：槓桿與滑輪 (Simple Machines)",
    "酸鹼變色龍 (Acids & Bases)",
    "電磁鐵的魔力 (Electromagnets)",
    "鐵生鏽了 (Rusting)",
    "生物與環境生態系 (Ecosystems)",
    "天氣圖與颱風 (Weather Maps)"
  ]
};
