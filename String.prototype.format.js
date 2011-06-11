/*  
    Original script title: "String.prototype.format.js"; version 1.0
    Copyright (c) 2011, Chris O'Brien, prettycode.org
    http://github.com/prettycode/String.prototype.format.js
    
    Permission is hereby granted for unrestricted use, modification, and redistribution of this
    script, only under the condition that this code comment is kept wholly complete, appearing
    directly above the script's code body, in all original or modified non-minified representations
*/ 

String.prototype.format = function () {
    "use strict";
    // Convert `arguments` to real []
 
    var args = Array.prototype.slice.call(arguments),
        object_map = args[0],
        result = this,
        i,    /* = undefined */
        key,  /* = undefined */
        match;/* = undefined */

    if (args.length === 1 && typeof object_map === "object") {
        for (i = 0; match = /\{(\w+)\}/gm.exec(result); i++) {
            key = match[1]; 

            if (!!key) {
                result = result.split("{" + key + "}")
                               .join(object_map[key]);
            }
        }

    } else {
        for (i = 0; i < args.length; i++) {
            result = result.replace("{}", args[i])
                           .split("{" + i + "}")
                           .join(args[i]);
        }
    }
   
    return result;
};