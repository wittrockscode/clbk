declare const clbk: <T, V extends unknown[] = unknown[]>(name: string, func: (...args: V) => T, passArgs?: boolean) => (...args: V) => T;
declare const on: (name: string, func: Function) => void;
export { clbk, on };
