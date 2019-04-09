// export interface Global extends NodeJS.Global {}

// declare namespace NodeJS {
//   export interface Global {
//     window: any
//   }
// }

// export interface Global {
//   document: Document;
//   window: Window;
// }

// declare var global: Global;

// declare global {
//   interface Window {
//     fetch: GlobalFetch
//   }
// }

// interface CustomGlobal {
//   fetch: GlobalFetch
// }

declare module NodeJS  {
  interface Global {
      fetch: any
  }
}

declare module '*.test.json' {
  const value: any;
  export default value;
}
