String.prototype.$format = function() {
 
    // Convert 'arguments' to real array
 
    var args = Array.prototype.slice.call(arguments);
   
    // First arg is an object map
   
    if (args.length === 1 && typeof(args[0]) === "object") {
        args = args[0];
    }
    
    // 'arguments' was an n-length list of strings 
    
    else {
        var replace = {};
       
        for (var i in args) {
            replace[i] = args[i];
        }
       
        args = replace;
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