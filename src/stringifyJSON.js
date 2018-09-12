// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (Array.isArray(obj)) {
    return '[' + stringifyObject(obj) + ']';
  }

  if (obj instanceof Object) {
	return '{' + stringifyObject(obj) + '}';
  };

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  return '' + obj;
}


function stringifyObject (obj) {
  var string = '';
  _.each(obj, function(value, key) {
	  	if (string !== '') {
	  	  string += ','
	  	}
	    if (typeof value === 'function' || value === undefined) {
	  	  return string += '';
	  	}
      if (!Array.isArray(obj)) {
        string += '"' + key + '":'
      }
	  	if (typeof value === 'string') {
	  	  return string += '"' + value + '"';
	  	}
	  	if (Array.isArray(value)) {
	  	  return string += '[' + stringifyObject(value) + ']';
	  	}
      if (value instanceof Object) {
        return string += '{' + stringifyObject(value) + '}';
      }
	  	return string += value;  		
	  })
  return string
}