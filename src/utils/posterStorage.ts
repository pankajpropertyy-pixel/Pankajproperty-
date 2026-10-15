// Storage helper for persisting uploaded custom poster images in IndexedDB
const DB_NAME = 'PankajPropertyDB';
const STORE_NAME = 'media';
const POSTER_KEY = 'shree_shyam_poster_blob';
const POSTER_NAME_KEY = 'shree_shyam_poster_filename';

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

export async function saveShreeShyamPoster(file: File): Promise<string> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(file, POSTER_KEY);
    store.put(file.name, POSTER_NAME_KEY);
    tx.oncomplete = () => {
      const url = URL.createObjectURL(file);
      resolve(url);
    };
    tx.onerror = () => reject(tx.error);
  });
}

export async function loadSavedShreeShyamPoster(): Promise<{ url: string; fileName: string } | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const getFile = store.get(POSTER_KEY);
      const getName = store.get(POSTER_NAME_KEY);

      tx.oncomplete = () => {
        if (getFile.result instanceof Blob) {
          const url = URL.createObjectURL(getFile.result);
          resolve({ url, fileName: getName.result || 'shree_shyam_vihar_poster.png' });
        } else {
          resolve(null);
        }
      };
      tx.onerror = () => resolve(null);
    });
  } catch (err) {
    console.warn('Could not access IndexedDB for saved poster:', err);
    return null;
  }
}
