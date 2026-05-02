/**
 * STORAGE MODULE - Centralized localStorage management
 */

const Storage = (function() {
    const PREFIX = 'faithbase_';
    
    function getKey(key) {
        return PREFIX + key;
    }
    
    function set(key, value) {
        try {
            localStorage.setItem(getKey(key), JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage save error:', e);
            return false;
        }
    }
    
    function get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(getKey(key));
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage read error:', e);
            return defaultValue;
        }
    }
    
    function remove(key) {
        localStorage.removeItem(getKey(key));
    }
    
    function clear() {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(PREFIX)) {
                localStorage.removeItem(key);
            }
        });
    }
    
    function exists(key) {
        return localStorage.getItem(getKey(key)) !== null;
    }
    
    return { set, get, remove, clear, exists };
})();
