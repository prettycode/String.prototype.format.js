/*  
    Copyright (c) 2011, Chris O'Brien, prettycode.org, MIT license
    http://github.com/prettycode/String.prototype.format.js
*/ 
String.prototype.format = function() {
    var args = Array.prototype.slice.call(arguments),
        format = this,
        match;
   
    if (args.length === 1 && typeof args[0] === "object") {
        args = args[0];
    }
    
    for (var i = 0; match = /{(\d+|\w+)?}/gm.exec(format); i++) {
        var key = match[1];
        
        format = key ? 
                 format.replace(new RegExp("\\{" + key + "\\}", "gm"), args[key]) :
                 format.replace("{}", args[i]);
    }
    
    return format;
};
