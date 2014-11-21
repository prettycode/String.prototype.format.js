/*  
    Original script title: "String.prototype.format.js"; version 1.0
    Copyright (c) 2011, Chris O'Brien, prettycode.org, MIT license
    http://github.com/prettycode/String.prototype.format.js
*/ 

String.prototype.format = function() {
 
    // Convert `arguments` to real []
 
    var args = Array.prototype.slice.call(arguments);
   
    // First arg is an object map
   
    if (args.length === 1 && typeof args[0] === "object") {
        args = args[0];
    }
   
    // Do the replacing/formatting; args is now an object
   
    var result = this, match;
        
    for (var i = 0; match = /{(\d+|\w+)?}/gm.exec(result); i++) {
    
        var key = match[1];
        
        if (!key) {
            result = result.replace("{}", args[i]);
        }
        else {
            result = result.replace(new RegExp("\\{" + key + "\\}", "gm"), args[key]);
        }
    }
    
    return result;
};
