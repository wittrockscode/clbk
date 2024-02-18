import { bind, on } from "../dist/index.js";
import { describe, expect, it, vi } from "vitest";

const isGreaterThan = bind("isGreaterThan", (a: number, b: number) => a > b);
const isLessThan = bind("isLessThan", (a: number, b: number) => a < b);

describe("bind", () => {
  it("should return the correct value", () => {
    expect(isGreaterThan(5, 3)).toBe(true);
    expect(isLessThan(5, 3)).toBe(false);
  });
})

describe("on", () => {
  it("should be called when the corresponding function is executed", () => {
    const greaterThanSpy = vi.fn();
    const lessThanSpy = vi.fn();
    const notExistingSpy = vi.fn();

    on("isGreaterThan", greaterThanSpy);
    on("isLessThan", lessThanSpy);
    on("notExisting", notExistingSpy);

    isGreaterThan(5, 3);
    isGreaterThan(3, 5);
    isLessThan(5, 3);
    
    expect(greaterThanSpy).toHaveBeenCalledTimes(2);
    expect(lessThanSpy).toHaveBeenCalledTimes(1);
    expect(notExistingSpy).not.toHaveBeenCalled();
  });

  it("should be called with the correct arguments", () => {
    const greaterThanSpy = vi.fn();
    const lessThanSpy = vi.fn();

    on("isGreaterThan", greaterThanSpy);
    on("isLessThan", lessThanSpy);

    isGreaterThan(5, 3);
    isLessThan(6, 4);
    
    expect(greaterThanSpy).toHaveBeenCalledWith(5, 3);
    expect(lessThanSpy).toHaveBeenCalledWith(6, 4);
  });
})
