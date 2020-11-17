// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

let getElementsByClassName = function(className) {
  let matchElements = [];

  let traverse = function(element) {
    let classes = element.classList;
    if (classes && classes.contains(className)) {
      matchElements.push(element);
    }

    if (element.hasChildNodes()) {
      let children = element.childNodes;
      for (let i = 0; i < children.length; i++) {
        traverse(children[i]);
      }
    }

  };

  traverse(document.body);
  return matchElements;
};
