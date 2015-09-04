var currify = function(argNum, f, args, bind) {
  if (!args) { args = []; }  
    
  if (args.length == argNum) {
      return f.apply(bind, args);
  }
    
  return function() {
    var argsarr = Array.prototype.slice.call(arguments);
  	return currify(argNum, f, args.concat(argsarr), bind);
  };
};
