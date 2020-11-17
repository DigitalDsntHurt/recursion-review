// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//
//// PAIR SOLUTION
//

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + String(obj) + '"';
  } else if (typeof obj !== 'object') {
    return String(obj);
  } else if (Array.isArray(obj)) {
    // ARRAY CASE
    var stringifiedElements = '[';
    var helper = function(arr) {
      if (arr.length === 1) {
        stringifiedElements += stringifyJSON(arr[0]);
      } else if (arr.length > 1) {
        stringifiedElements += stringifyJSON(arr[0]) + ',';
        helper(arr.slice(1));
      }
    };

    helper(obj);
    return stringifiedElements + ']';
  } else {
    // OBJECT CASE
    let stringifiedElements = '{';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
    }
    var helper = function(obj) {

      let keys = Object.keys(obj);
      // if (typeof obj[keys[0]] === 'function' || obj[keys] === undefined) {
      //   return '{}';
      // }
      if (keys.length === 1) {
        stringifiedElements += stringifyJSON(keys[0]) + ':' + stringifyJSON(obj[keys[0]]);
      } else if (keys.length > 1) {
        stringifiedElements += stringifyJSON(keys[0]) + ':' + stringifyJSON(obj[keys[0]]) + ',';
        delete obj[keys[0]];
        helper(obj);
      }
    };
    helper(obj);
    return stringifiedElements + '}';
  }
};













// //
// // // NS SOLO SOLUTION
// //

// var stringifyJSON = function(obj) {
//   if (obj === null) {
//     return 'null';
//   } else if (typeof obj === 'string') {
//     return '"' + String(obj) + '"';
//   } else if (typeof obj !== 'object') {
//     return String(obj);
//   } else if (Array.isArray(obj)) {
//     // ARRAY CASE
//     return stringifyArray(obj);
//   } else {
//     return stringifyObj(obj);
//   }

// };

// var stringifyArray = function(array) {
//   var stringified = '';
//   for (var item of array) {
//     if (item === null) { stringified += 'null, '; }
//     if (typeof item !== 'object') { stringified += item + ', '; }
//     if (Object.prototype.toString.call(item) === '[object Array]') { stringified += stringifyArray(item); }
//     if (Object.prototype.toString.call(item) === '[object Object]') { stringified += stringifyObj(item); }
//   }
//   return '{' + stringified.slice(0, -1) + '}';
// };

// var stringifyObj = function(obj) {
//   if (Object.keys(obj).length === 0) {
//     return '{}';
//   }
//   var stringified = '';
//   for (var key in obj) {
//     stringified += '"' + key + '":';
//     var value = obj[key];
//     if (value === null) { stringified += 'null, '; }
//     if (typeof value !== 'object') { stringified += value + ', '; }
//     if (Object.prototype.toString.call(value) === '[object Array]') { stringified += stringifyArray(value); }
//     if (Object.prototype.toString.call(value) === '[object Object]') { stringified += stringifyObj(value); }
//   }
//   return '{' + stringified.slice(0, -1) + '}';
// };

