// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var matchElements = [];

  var helper = function(element) {
    if (element.classList.includes(className)) {
      matchElements.push(element);
    }

    var children = element.childNodes;
    // for (var child of children) {
    //   helper(child);
    // }
    for (var i = 0; i < children.length; i++) {
      helper(children[i]);
    }
  };

  helper(document.body);
  return matchElements;
};

// I : string class name
// O : array of dom nodes