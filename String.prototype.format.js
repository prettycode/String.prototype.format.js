/*
	String.prototype.format.js
	Copyright (c) 2011, Chris O'Brien, prettycode.org
	http://github.com/prettycode/String.prototype.format.js
	
	LICENSE: Permission is hereby granted for unrestricted
	use, modification, and restribution of this script, only 
	under the condition that this code comment appearing in
	the script is kept wholly complete, appearing above the 
	script's code body.
*/ 

String.prototype.$format = function() {
 
    // Convert 'arguments' to real array
 
    var args = Array.prototype.slice.call(arguments);
   
    // First arg is an object map
   
    if (args.length == 1 && typeof args[0] == "object") {
        args = args[0];
    }
   
    // Do the replacing/formatting; args is now an object
   
    var result = this;
   
    for (var key in args) {
        if (args.hasOwnProperty(key)) {
            result = result.replace(new RegExp("\\{" + key + "\\}", "gm"), args[key]);
        }
    }
   
    return result;
               
};