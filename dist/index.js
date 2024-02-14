class CallbackHandler {
    constructor() {
        this.callbacks = {};
    }
    addCallback(name, func) {
        if (!this.callbacks[name])
            this.callbacks[name] = [func];
        else
            this.callbacks[name].push(func);
    }
    call(name, ...args) {
        if (!this.callbacks[name])
            throw new Error(`Callback with name ${name} does not exist`);
        this.callbacks[name].forEach((func) => func(...args));
    }
}
const handler = new CallbackHandler();
/**
 * A funtion wrapper that calls a callback before the function is executed.
 * @param {string} name - The name of the callback.
 * @param {Function} func - The function to be wrapped.
 * @param {boolean} passArgs - Whether to pass the function arguments to the callback.
 * @returns {Function} - The wrapped function.
 */
const clbk = (name, func, passArgs = false) => {
    return function (...args) {
        if (passArgs)
            handler.call(name, ...args);
        else
            handler.call(name);
        return func(...args);
    };
};
/**
 * Is called when the callback function is triggered.
 * @param {string} name - The name of the callback.
 * @param {Function} func - The function to be executed.
 */
const on = (name, func) => {
    handler.addCallback(name, func);
};
export { clbk, on };
