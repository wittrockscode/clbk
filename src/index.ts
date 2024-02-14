class CallbackHandler {
  private callbacks: { [key: string]: Function } = {}
  addCallback (name: string, func: Function) {
    if (this.callbacks[name]) throw new Error(`Callback with name ${name} already exists`);

    this.callbacks[name] = func;
  }
  call (name: string, ...args: any[]) {
    if (!this.callbacks[name]) throw new Error(`Callback with name ${name} does not exist`);

    this.callbacks[name]!(...args);
  }
}

const handler = new CallbackHandler();

const clbk = <T, V extends unknown[] = unknown[]>(
  name: string,
  func: (...args: V) => T,
  passArgs = false,
) => {
  return function (...args: Parameters<typeof func>) {
    if (passArgs) handler.call(name, ...args);
    else handler.call(name);
    return func(...args);
  }
};

const on = (name: string, func: Function) => {
  handler.addCallback(name, func);
};

export { clbk, on };
