declare module '*.png' {
  const content: string
  export default content
}

declare module '*registerServiceWorker.js' {
  export default Function
}

// interface IWindow {
//   Date?: any
// }

// declare var window: IWindow
