# currifyjs
A JavaScript function that transforms any function into a partially applied (curried) version.

# Usage

Suppose you have a function that takes three arguments:


    function add(a, b, c) {
	    return a + b + c;
    };

You can create a curried version by passing in the number of arguments and the function into currify():

    var addCurr = currify(3, add);

Then, every time you call the function with less arguments than it takes, it will return a partially applied version of that function:

      var addA = addCurr(1);
      var addB = addA(2);
      addB(3); // returns 5

      var addA = addCurr(2,4);
      addA(4); // returns 10

      // not sure why you'd want to do this, but it works
      addCurr(2)(4)(6); // returns 12

# More information

If you want to know why this might be useful:

https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe