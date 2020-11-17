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
    // array case
    let stringifiedElements = [];

    // define function

    if (obj.length === 1) {
      stringifiedElements.push(stringifyJSON(obj[0]));
    } else if (obj.length > 1) {
      stringifiedElements.push(stringifyJSON(obj[0]));
      stringifyJSON(obj.slice(1));
    }

    return '[' + stringifiedElements.join(',') + ']';

    // end function
  } else {
    // obj case
  }

};


// number

// null

// boolean

// string

// array

// object


