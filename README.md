extend (as jQuery.extend)
====
### usage
1. extend( target [, object1 ] [, objectN ] )
2. extend( [deep ], target, object1 [, objectN ] )

### example (from jQuery)
	// Merge two objects, modifying the first.
	var object1 = {
  		apple: 0,
  		banana: { weight: 52, price: 100 },
  		cherry: 97
	};
	var object2 = {
  		banana: { price: 200 },
  		durian: 100
	};
	// Merge object2 into object1
	extend( object1, object2 );
	
	
	// Merge two objects recursively, modifying the first.
	var object1 = {
  		apple: 0,
  		banana: { weight: 52, price: 100 },
  		cherry: 97
	};
	var object2 = {
  		banana: { price: 200 },
  		durian: 100
	};
	// Merge object2 into object1, recursively
	extend( true, object1, object2 );  
	
	
	// Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.
	var defaults = { validate: false, limit: 5, name: "foo" };
	var options = { validate: true, name: "bar" };
	// Merge defaults and options, without modifying defaults
	var settings = extend( {}, defaults, options ); 