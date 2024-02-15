import { bind, on } from "../dist/index.js";

const a = bind("a", () => console.log("a func"));
const b = bind("b", () => console.log("b func"));

on("a", () => console.log("a callback"));
on("b", () => console.log("b callback"));

a();
b();
