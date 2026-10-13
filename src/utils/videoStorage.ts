// IndexedDB storage utility to persist the user's uploaded MP4 video locally in the browser
const DB_NAME = 'PankajPropertyDB';
const STORE_NAME = 'media';
const VIDEO_KEY = 'hero_video_blob';
const VIDEO_NAME_KEY = 'hero_video_filename';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveVideoBlob(file: File): Promise<string> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(file, VIDEO_KEY);
    store.put(file.name, VIDEO_NAME_KEY);
    tx.oncomplete = () => {
      const url = URL.createObjectURL(file);
      resolve(url);
    };
    tx.onerror = () => reject(tx.error);
  });
}

export async function loadSavedVideo(): Promise<{ url: string; fileName: string } | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const getFile = store.get(VIDEO_KEY);
      const getName = store.get(VIDEO_NAME_KEY);

      tx.oncomplete = () => {
        if (getFile.result instanceof Blob) {
          const url = URL.createObjectURL(getFile.result);
          resolve({ url, fileName: getName.result || 'custom-video.mp4' });
        } else {
          resolve(null);
        }
      };
      tx.onerror = () => resolve(null);
    });
  } catch (err) {
    console.warn('Could not access IndexedDB for saved video:', err);
    return null;
  }
}

export async function clearSavedVideo(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.delete(VIDEO_KEY);
      store.delete(VIDEO_NAME_KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {
    // Ignore error
  }
}
