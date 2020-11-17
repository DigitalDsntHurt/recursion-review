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
    // let stringifiedArray = '';
    var stringifiedElements = [];
    if (obj.length === 1) {
      // stringifiedArray = stringifiedArray + stringifyJSON(obj[0]);
      stringifiedElements = stringifiedElements.concat(stringifyJSON(obj[0]));
    } else if (obj.length > 1) {
      stringifiedElements = [stringifyJSON(obj[0])].concat(stringifyJSON(obj.slice(1)));
    }

    return '[' + stringifiedElements.join(',') + ']';
  } else {
    // OBJECT CASE


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

