// this is what you would do if you liked things to be easy:
// let stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

let stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + String(obj) + '"';
  } else if (typeof obj !== 'object') {
    return String(obj);
  } else if (Array.isArray(obj)) {
    let stringifiedElements = '[';
    let arrayHelper = function(arr) {
      if (arr.length === 1) {
        stringifiedElements += stringifyJSON(arr[0]);
      } else if (arr.length > 1) {
        stringifiedElements += stringifyJSON(arr[0]) + ',';
        arrayHelper(arr.slice(1));
      }
    };
    arrayHelper(obj);
    return stringifiedElements + ']';
  } else {
    let stringifiedElements = '{';
    let objectHelper = function(obj) {
      for (let key in obj) {
        if (typeof obj[key] === 'function' || obj[key] === undefined) {
          return '{}';
        }
      }
      let keys = Object.keys(obj);
      if (keys.length === 1) {
        stringifiedElements += stringifyJSON(keys[0]) + ':' + stringifyJSON(obj[keys[0]]);
      } else if (keys.length > 1) {
        stringifiedElements += stringifyJSON(keys[0]) + ':' + stringifyJSON(obj[keys[0]]) + ',';
        delete obj[keys[0]];
        objectHelper(obj);
      }
    };
    objectHelper(obj);
    return stringifiedElements + '}';
  }
};
