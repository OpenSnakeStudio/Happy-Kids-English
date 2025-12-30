/**
 * API Key 管理工具
 * 負責 localStorage 的讀寫操作與輪詢邏輯
 */

const API_KEY_SINGLE_KEY = 'happy_kids_gemini_api_key'; // 舊有的單一金鑰索引
const API_KEYS_POOL_KEY = 'happy_kids_gemini_api_keys_pool'; // 金鑰池索引
const API_KEY_INDEX_KEY = 'happy_kids_gemini_api_key_index'; // 目前輪轉到的索引

/**
 * 從 localStorage 讀取金鑰池
 */
export const getApiKeyPool = (): string[] => {
    try {
        const pool = localStorage.getItem(API_KEYS_POOL_KEY);
        if (pool) {
            const parsed = JSON.parse(pool);
            return Array.isArray(parsed) ? parsed : [];
        }

        // 向下相容：檢查是否有舊的單一金鑰
        const oldKey = localStorage.getItem(API_KEY_SINGLE_KEY);
        if (oldKey) {
            const newPool = [oldKey];
            saveApiKeyPool(newPool);
            localStorage.removeItem(API_KEY_SINGLE_KEY); // 遷移後刪除
            return newPool;
        }

        return [];
    } catch (error) {
        console.error('讀取 API Key 池失敗:', error);
        return [];
    }
};

/**
 * 儲存金鑰池到 localStorage
 */
export const saveApiKeyPool = (pool: string[]): boolean => {
    try {
        localStorage.setItem(API_KEYS_POOL_KEY, JSON.stringify(pool));
        return true;
    } catch (error) {
        console.error('儲存 API Key 池失敗:', error);
        return false;
    }
};

/**
 * 實作輪詢 (Round Robin) 取得下一個 API Key
 */
export const getRotatingApiKey = (): string | null => {
    const pool = getApiKeyPool();
    if (pool.length === 0) return null;
    if (pool.length === 1) return pool[0];

    try {
        const currentIndex = parseInt(localStorage.getItem(API_KEY_INDEX_KEY) || '0', 10);
        const nextIndex = (currentIndex + 1) % pool.length;

        localStorage.setItem(API_KEY_INDEX_KEY, nextIndex.toString());

        const selectedKey = pool[currentIndex];
        console.log(`[Round Robin] 使用第 ${currentIndex + 1}/${pool.length} 組金鑰`);
        return selectedKey;
    } catch (error) {
        console.error('輪詢 API Key 失敗:', error);
        return pool[0];
    }
};

/**
 * 舊有函數維持相容性：回傳第一個金鑰或執行輪詢
 */
export const getStoredApiKey = (): string | null => {
    return getRotatingApiKey();
};

/**
 * 儲存單一 API Key（用於舊介面相容）
 * 會將新金鑰加入池中，若已存在則不重複加入
 */
export const saveApiKey = (apiKey: string): boolean => {
    const pool = getApiKeyPool();
    if (!pool.includes(apiKey)) {
        pool.push(apiKey);
        return saveApiKeyPool(pool);
    }
    return true;
};

/**
 * 清除所有 API Key
 */
export const clearApiKey = (): boolean => {
    try {
        localStorage.removeItem(API_KEYS_POOL_KEY);
        localStorage.removeItem(API_KEY_INDEX_KEY);
        localStorage.removeItem(API_KEY_SINGLE_KEY);
        return true;
    } catch (error) {
        console.error('清除 API Key 失敗:', error);
        return false;
    }
};

/**
 * 檢查是否有任何金鑰
 */
export const hasApiKey = (): boolean => {
    return getApiKeyPool().length > 0;
};

/**
 * 驗證 API Key 格式
 */
export const validateApiKeyFormat = (apiKey: string): { valid: boolean; error?: string } => {
    if (!apiKey || !apiKey.trim()) {
        return { valid: false, error: 'API Key 不能為空' };
    }

    if (apiKey.length < 20) {
        return { valid: false, error: 'API Key 長度不正確' };
    }

    if (!apiKey.startsWith('AIza')) {
        return { valid: false, error: 'API Key 格式可能不正確（應以 AIza 開頭）' };
    }

    return { valid: true };
};

