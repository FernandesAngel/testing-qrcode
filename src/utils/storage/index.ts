import { AuthState } from "@/contexts/auth/interfaces";

export function settingStorage(dataStorage: AuthState) {
  localStorage.setItem(
    `${import.meta.env.VITE_KEY_STORAGE}:userToken`,
    JSON.stringify(dataStorage)
  );
}

export function removeStorage() {
  const keysToRemove = [`${import.meta.env.VITE_KEY_STORAGE}:userToken`];
  keysToRemove.forEach((item) => localStorage.removeItem(item));
}

export function getStorage() {
  return localStorage.getItem(`${import.meta.env.VITE_KEY_STORAGE}:userToken`);
}
