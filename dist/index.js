class CallbackHandler {
    constructor() {
        this.callbacks = {};
    }
    addCallback(name, func) {
        if (this.callbacks[name])
            throw new Error(`Callback with name ${name} already exists`);
        this.callbacks[name] = func;
    }
    call(name, ...args) {
        if (!this.callbacks[name])
            throw new Error(`Callback with name ${name} does not exist`);
        this.callbacks[name](...args);
    }
}
const handler = new CallbackHandler();
const clbk = (name, func, passArgs = false) => {
    return function (...args) {
        if (passArgs)
            handler.call(name, ...args);
        else
            handler.call(name);
        return func(...args);
    };
};
const on = (name, func) => {
    handler.addCallback(name, func);
};
export { clbk, on };
