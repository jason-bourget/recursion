// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  recursivePush(document.body);

  function recursivePush(element) {
    var classList = element.classList;
    if (classList) {
      classList.forEach(function(elementClass) {
        if (elementClass === className) {
          result.push(element);
        }
      })
    }
    if (element.childNodes !== undefined && element.childNodes.length > 0) {
      var children = element.childNodes
      children.forEach(function(element) {
        recursivePush(element);
      })
    }
  }
  return result;
}


  // You should use document.body, element.childNodes, and element.classList
  // input: a web page with elements of varying classes
  // output: an array, like this:
	// [div.example, div.example.color, div.example.color]
  // assumptions: we're passing in ONE class, not multiple classes
  // the elements may have multiple classes
  // we have to check each class on each element against our target class
  // if it's a match, we push it to an array
  // use recursion to dive deeper: if the element in question has children, call the function with the children