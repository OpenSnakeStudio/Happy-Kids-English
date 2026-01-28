# Happy Kids English - 快樂小學堂 🎓

[![Version](https://img.shields.io/badge/version-1.5.1-blue.svg)](https://github.com/truedano/Happy-Kids-English)
[![License](https://img.shields.io/badge/license-Open%20Source-green.svg)](https://github.com/truedano/Happy-Kids-English)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff.svg)](https://vitejs.dev/)

> **版本**: 1.5.1 | **最後更新**: 2026-01-28 | **狀態**: ✅ 已部署到 GitHub Pages

一個互動式、AI 驅動的學習應用程式,專為小學生(1-6 年級)設計,支援英語、數學、寫作、自然科學、理財及 AI 智慧六大科目。

## ✨ 特色功能

### 🎯 核心功能
- 🤖 **AI 生成內容**: 使用 Google Gemini AI 動態生成適齡教學內容
- 🔄 **API Key 輪詢 (Round Robin)**: 支援多組 API Key 自動輪替，分散配額壓力
- ⏳ **API Key 頻率限制 (Rate Limiting)**: 確保每組金鑰每分鐘使用不超過 15 次，自動跳過已達上限的金鑰
- 🎮 **多樣化遊戲**: 連連看、拼字、數學挑戰、科學分類等 15+ 種互動遊戲
- ✍️ **自訂主題**: 支援使用者自行輸入想學習的主題，由 AI 即時生成教材
- 🔒 **隱私與安全**: API Key 採 AES 加密儲存於瀏覽器本機，且不支援介面明文顯示
- 💰 **完全免費**: 使用您自己的 Google Gemini API 免費配額

### 📚 支援科目

#### 🦁 英語 (English)
- **學習模式**: 單字卡片學習,含發音、例句、中文翻譯
- **遊戲模式**:
  - 🧩 連連看 - 配對單字與中文
  - 🔤 字母大亂鬥 - 重組字母拼出單字
  - ✏️ 拼字練習 - 聽音拼字(4-6年級)
- **智能分級**: 根據年級調整難度(A1-A2)

#### 📐 數學 (Math)
- **學習模式**: 數學概念、公式、解題步驟
- **遊戲模式**:
  - 🚀 急速快算 - 限時計算挑戰
  - 🔢 數字拼圖 - 數字邏輯遊戲
  - 📐 形狀建築師 - 幾何圖形認識
- **主題涵蓋**: 加減乘除、分數、小數、幾何、因數倍數

#### 📝 寫作 (Writing)
- **學習模式**: 修辭技巧、成語、寫作方法
- **遊戲模式**:
  - 📝 句子積木 - 組合句子練習
  - 🥋 成語修煉 - 成語學習與應用
- **技能培養**: 看圖說話、創意修辭、議論文

#### 🔬 自然 (Science)
- **學習模式**: 科學概念、實驗原理、觀察方法
- **遊戲模式**:
  - 🧪 分類大挑戰 - 科學分類練習
  - 🌱 流程排序王 - 科學過程排序
- **主題範圍**: 生活科學、磁鐵與電、簡單機械

#### 💰 理財 (Finance) 🆕
- **學習模式**: 財商概念、儲蓄觀念、消費選擇
- **遊戲模式**: 連連看、測驗挑戰
- **主題範圍**: 認識金錢、儲蓄觀念、消費選擇、利息與投資風險
- **分級設計**: 
  - 低年級：錢幣認識與儲蓄基礎
  - 中年級：智慧消費與銀行觀念
  - 高年級：預算管理與投資風險

#### 🤖 AI 智慧 (AI) 🆕
- **學習模式**: AI 概念、原理解說、倫理思考
- **遊戲模式**: 連連看、測驗挑戰
- **主題範圍**: AI 生活應用、機器學習原理、生成式 AI、科技倫理
- **分級設計**:
  - 低年級：生活中的 AI 發現
  - 中年級：機器學習與辨識原理
  - 高年級：生成式 AI 與科技倫理

### 🎨 使用者體驗
- 🎵 **音效回饋**: 互動音效增強學習樂趣
- 🎊 **動畫效果**: 流暢的過場動畫和慶祝特效
- 📱 **響應式設計**: 支援手機、平板、電腦
- 🌈 **友善介面**: 色彩豐富、適合兒童的 UI 設計

## 🌐 線上 Demo

**立即體驗:** [https://truedano.github.io/Happy-Kids-English/](https://truedano.github.io/Happy-Kids-English/)

> 💡 首次使用需要設定您自己的 Gemini API Key(免費申請)


## 🚀 快速開始

### 前置需求
- Node.js (建議 v18 或以上)
- Google Gemini API Key（免費申請）

### 安裝步驟

1. **安裝相依套件**
   ```bash
   npm install
   ```

2. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

3. **設定 API Key**
   - 開啟瀏覽器訪問 http://localhost:3000
   - 首次使用會自動彈出 API Key 設定視窗
   - 前往 [Google AI Studio](https://aistudio.google.com/apikey) 申請免費 API Key
   - 將 API Key 貼到設定視窗中
   - 點擊「儲存並開始使用」

📖 **詳細的 API Key 申請教學請參考：[API_KEY_GUIDE.md](./API_KEY_GUIDE.md)**

## 🔑 關於 API Key

本應用程式採用「使用者自行管理 API Key」的設計：

- ✅ **安全**：您的 API Key 只儲存在瀏覽器 localStorage，不會傳送到任何伺服器
- ✅ **輪詢**：支援多組金鑰（Round Robin），自動分散每分鐘請求數（RPM）壓力
- ✅ **頻率控制**：內建每分鐘 15 次的嚴格頻率限制，防止帳號因過度使用受限
- ✅ **免費**：使用 Google Gemini 的免費配額（每天 1,500 次請求）
- ✅ **隱私**：我們不收集任何資料，完全在本機運作
- ✅ **開源**：程式碼完全透明，可自行檢視

## 📚 使用說明

1. 選擇科目（英語、數學、寫作、自然）
2. 選擇年級（1-6 年級）
3. 選擇主題或讓 AI 隨機生成
4. 開始學習和遊戲！

## 🛠️ 技術架構

### 前端技術棧
- **框架**: React 19.2.0 + TypeScript 5.8.2
- **建置工具**: Vite 6.2.0
- **樣式**: Tailwind CSS (CDN)
- **AI 服務**: Google Gemini API (@google/genai 1.30.0)
- **特效**: canvas-confetti 1.9.2
- **語音**: Web Speech API (瀏覽器原生)

### 專案結構
```
Happy-Kids-English/
├── components/          # React 元件
│   ├── ApiKeyModal.tsx       # API Key 設定彈窗
│   ├── ApiKeySettings.tsx    # API Key 管理
│   ├── GradeCard.tsx         # 年級選擇卡片
│   ├── SubjectCard.tsx       # 科目選擇卡片
│   ├── StudyMode.tsx         # 學習模式
│   ├── QuizGame.tsx          # 測驗遊戲
│   ├── MatchingGame.tsx      # 連連看遊戲
│   ├── SpellingGame.tsx      # 拼字遊戲
│   ├── WordScrambleGame.tsx  # 字母大亂鬥
│   ├── MathChallenge.tsx     # 數學挑戰
│   ├── NumberPuzzleGame.tsx  # 數字拼圖
│   ├── GeometryBuilderGame.tsx # 幾何建築師
│   ├── SentenceBuilderGame.tsx # 句子積木
│   ├── IdiomDojoGame.tsx     # 成語修煉
│   ├── ScienceSortingGame.tsx # 科學分類
│   ├── ScienceProcessGame.tsx # 科學流程
│   └── [Topic]Selection.tsx  # 主題選擇元件
├── services/            # 服務層
│   ├── geminiService.ts      # Gemini AI 整合
│   ├── apiKeyManager.ts      # API Key 管理
│   └── audioService.ts       # 音效服務
├── data/                # 靜態資料
│   └── topics/               # 各科目主題資料
├── public/              # 靜態資源
│   ├── favicon.png           # 網站圖示
│   └── .nojekyll             # GitHub Pages 配置
├── .github/workflows/   # GitHub Actions
│   └── deploy.yml            # 自動部署工作流程
├── App.tsx              # 主應用程式
├── types.ts             # TypeScript 型別定義
├── vite.config.ts       # Vite 配置
└── index.html           # HTML 入口

```

### 部署配置
- **平台**: GitHub Pages
- **CI/CD**: GitHub Actions
- **自動化**: 推送到 main 分支自動部署
- **Base Path**: `/Happy-Kids-English/` (可自訂)
- **Node.js**: 20.x

### 安全性設計
- ✅ 無後端伺服器,純前端應用
- ✅ API Key 儲存在瀏覽器 localStorage
- ✅ 不收集任何使用者資料
- ✅ 所有 AI 請求直接從客戶端發送
- ✅ 開源透明,可自行審查程式碼

## 🚀 部署到 GitHub Pages

### 自動部署流程
本專案已配置 GitHub Actions 自動部署:

1. **推送程式碼**
   ```bash
   git push origin main
   ```

2. **自動建置**: GitHub Actions 自動執行
   - 安裝相依套件
   - 執行 `npm run build`
   - 部署到 GitHub Pages

3. **訪問網站**
   ```
   https://YOUR_USERNAME.github.io/Happy-Kids-English/
   ```

### 手動部署步驟
如需手動設定,請參考詳細指南:

**快速設定**:
1. Fork 或 Clone 此 repository
2. 在 GitHub repository 設定中:
   - Settings > Pages
   - Source 選擇 "GitHub Actions"
3. 推送程式碼觸發部署
4. 等待 2-3 分鐘完成建置

**自訂配置**:
- 修改 `vite.config.ts` 中的 `base` 路徑
- 調整 `.github/workflows/deploy.yml` 工作流程
- 更新 `README.md` 中的 Demo 連結

## 📊 專案狀態

### 版本歷程
- **v1.5.1** (2026-01-28)
  - 🔤 **優化「字母大亂鬥 (Word Scramble)」小遊戲**：
    - 新增 **「復原 (Undo)」** 功能：可點擊按鈕或按 `Backspace` 鍵移除最後一個選取的字母。
    - 新增 **「重填 (Reset)」** 功能：一鍵清空所有已選字母並回到候選區。
    - 支援 **「點選移除」**：直接點擊答案區的字母即可將其放回候選區，操作更直覺。
    - 優化互動回饋：增加視覺引導與鍵盤支援，大幅提升拼字遊戲的流暢度。
- **v1.5.0** (2026-01-14)
  - ⏳ **新增 API Key 頻率限制 (Rate Limiting)**： 
    - 實作每組 API Key 每分鐘最高 15 次請求的限制。
    - 智能輪詢系統會自動跳過當前已達限制的金鑰，優先選擇可用金鑰。
    - 當所有金鑰皆達限制時，提供友好的繁體中文錯誤提示與倒數等待建議。
- **v1.4.0** (2025-12-31)
  - 🤖 新增 **AI 智慧 (AI)** 課程：分年級探討 AI 原理、應用與倫理
  - 💰 新增 **理財 (Finance)** 課程：建立兒童財商教育基礎
  - ✍️ 新增 **自訂主題功能**：全科目支援使用者自行輸入主題，AI 即時生成客製化教材
  - 🎨 調整首頁佈局：改為 6 科目 2x3 網格設計
- **v1.3.0** (2025-12-30)
  - ✅ 新增 **API Key 嚴格驗證機制**：儲存金鑰池前將逐一進行連線測試，確保每一組金鑰均可正常運作
  - 🔍 強化單一金鑰新增檢查：新增金鑰時立即點擊驗證，避免無效金鑰進入池中
  - 🏗️ 優化代碼結構：統一模型名稱管理 (`GEMINI_MODEL`)，消除重複定義
  - 🎨 修復 UI 層級問題：優化 Header `z-index`，解決設定選單被背景卡片遮擋的問題
- **v1.2.0** (2025-12-30)
  - 🔒 新增 **localStorage API Key AES 加密** 保護
  - 🙈 隱藏 API Key 明文顯示功能，提升操作隱私
  - 📐 補全數學科目 **「給我一個驚喜」** 隨機主題生成功能
  - 🎨 統一全科目隨機按鈕視覺與音效體驗
- **v1.1.0** (2025-12-30)
  - 🔄 新增 **API Key 輪詢 (Round Robin)** 功能
  - 🛠️ 重構金鑰管理系統，支援多組 API Key 批量新增與刪除
  - 🎨 優化 API 設定介面與動畫回饋
- **v1.0.0** (2025-12-30)
  - ✅ 完整的四科目支援
  - ✅ 12+ 種互動遊戲
  - ✅ GitHub Pages 自動部署
  - ✅ Favicon 和 SEO 優化
  - ✅ API Key 管理系統

### 功能統計
- 📚 **科目數量**: 6 (英語、數學、寫作、自然、理財、AI 智慧)
- 🎮 **遊戲模式**: 15+
- 📝 **年級支援**: 1-6 年級
- 🎯 **題目數量**: 可自訂 (5/10/20 題)
- 🌍 **語言**: 繁體中文 + 英文

### 瀏覽器支援
- ✅ Chrome/Edge (推薦)
- ✅ Firefox
- ✅ Safari
- ✅ 行動裝置瀏覽器


## 📝 授權

本專案為開源專案,歡迎自由使用和修改。

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request!

### 如何貢獻
1. Fork 此專案
2. 建立您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 貢獻指南
- 遵循現有的程式碼風格
- 為新功能撰寫清晰的說明
- 測試您的變更
- 更新相關文件

## 📞 聯絡資訊

- **GitHub**: [@truedano](https://github.com/truedano)
- **專案 Issues**: [提交問題](https://github.com/truedano/Happy-Kids-English/issues)

## 🙏 致謝

- **Google Gemini AI**: 提供強大的 AI 生成能力
- **React Team**: 優秀的前端框架
- **Vite**: 快速的建置工具
- **Tailwind CSS**: 美觀的樣式系統
- **所有貢獻者**: 感謝每一位貢獻者的付出

## 📚 相關資源

- [Google AI Studio](https://aistudio.google.com/) - 申請 Gemini API Key
- [React 官方文件](https://react.dev/)
- [TypeScript 官方文件](https://www.typescriptlang.org/)
- [Vite 官方文件](https://vitejs.dev/)
- [Tailwind CSS 官方文件](https://tailwindcss.com/)

---

<div align="center">

**Made with ❤️ for kids learning**

[![GitHub stars](https://img.shields.io/github/stars/truedano/Happy-Kids-English?style=social)](https://github.com/truedano/Happy-Kids-English/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/truedano/Happy-Kids-English?style=social)](https://github.com/truedano/Happy-Kids-English/network/members)

**版本 1.5.1** | © 2026 Happy Kids English | [線上體驗](https://truedano.github.io/Happy-Kids-English/)

</div>
