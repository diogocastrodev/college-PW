/**
 * Generate a UUID (xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
 * @returns {string} UUID
 */
export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Debounce a function (wait for a certain amount of time before calling it)
 * @param {() => void} func Callback function
 * @param {int} timeout Time in milliseconds
 * @returns {() => void} Debounced function
 */
export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
