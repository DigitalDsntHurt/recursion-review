// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

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


// number

// null

// boolean

// string

// array

// object


