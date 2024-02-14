/**
 * A funtion wrapper that calls a callback before the function is executed.
 * @param {string} name - The name of the callback.
 * @param {Function} func - The function to be wrapped.
 * @param {boolean} passArgs - Whether to pass the function arguments to the callback.
 * @returns {Function} - The wrapped function.
 */
declare const clbk: <T, V extends unknown[] = unknown[]>(name: string, func: (...args: V) => T, passArgs?: boolean) => (...args: V) => T;
/**
 * Is called when the callback function is triggered.
 * @param {string} name - The name of the callback.
 * @param {Function} func - The function to be executed.
 */
declare const on: (name: string, func: Function) => void;
export { clbk, on };
