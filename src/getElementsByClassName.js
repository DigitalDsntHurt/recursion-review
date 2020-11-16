// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var matchElements = [];

  var helper = function(element) {
    var classes = element.classList;
    if (classes && classes.contains(className)) {
      matchElements.push(element);
    }

    if (element.hasChildNodes()) {
      var children = element.childNodes;
      for (var i = 0; i < children.length; i++) {
        helper(children[i]);
      }
    }

  };

  helper(document.body);
  return matchElements;
};









/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
// I : string class name
// O : array of dom nodes

// docuemnt.body
// element.childNodes
// element.classList

/*
HIGH LEVEL STRATEGY
  start at the root element
    check if its class list includes the given className
      if yes
        add element to return collection
    get all the root elements' children

    for each child element
      check if its class list includes the given className
      if yes
        add element to return collection
    get all current elements' children

*/


// var getElementsByClassName = function(className) {
//   let matchElements = [];

//   let matchClass = function(node, innerClassName) {
//     if (node.classList && node.classList.contains(innerClassName)) {
//       matchElements.push(node);
//     }

//     node.childNodes.forEach(function(child) {
//       if (child.classList && child.classList.contains(className)) {
//         matchElements.push(child);
//       }
//       matchClass(child);
//     });
//   };

//   matchClass(document.body);
//   console.log(matchElements);
//   return matchElements;
// };