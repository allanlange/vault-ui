// src/global.d.ts defines how to handle css modules
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}