'use strict';

class CallbackHandler {
    constructor() {
        this.callbacks = {};
        if (CallbackHandler._instance) {
            return CallbackHandler._instance;
        }
        CallbackHandler._instance = this;
    }
    add(name, func) {
        if (!this.callbacks[name])
            this.callbacks[name] = [func];
        else
            this.callbacks[name].push(func);
    }
    call(name, ...args) {
        if (!this.callbacks[name])
            return;
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
function bind(name, func, passArgs = true) {
    return function (...args) {
        if (passArgs)
            handler.call(name, ...args);
        else
            handler.call(name);
        return func(...args);
    };
}
/**
 * Is called when the callback function is triggered.
 * @param {string} name - The name of the callback.
 * @param {Function} func - The function to be executed.
 */
function on(name, func) {
    handler.add(name, func);
}

exports.bind = bind;
exports.on = on;
