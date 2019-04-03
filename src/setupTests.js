// https://github.com/developit/preact/issues/444
global.SVGElement = global.Element

var localStorageMock = (function() {
  var store = {}

  return {
    getItem: function(key) {
      return store[key] || null
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    clear: function() {
      store = {}
    }
  }

})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})
