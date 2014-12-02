<h5>For a version of this string formatter that is NOT a prototype on `String`, see:</h5>
	
	https://gist.github.com/prettycode/e458ba85a4b19b105674

String.prototype.format
=======================

Use this script to improve the readability your string formatting. It supports multiple formatting conventions. This is not a direct port of any particular language or library's string formatter.

Formatting using numbered brackets:

    >> var unformatted = "What does the {0} know that the {1} doesn't? No {1} knows!";
    >> unformatted.format("mustache", "nose");
    << "What does the mustache know that the nose doesn't? No nose knows!"
	
Implicit bracket-numbering: 
	
    >> var unformatted = "What does the {} know that the {} doesn't? None of the {} know!";
    >> unformatted.format("mustache", "nose", "noses");
    << "What does the mustache know that the nose doesn't? None of the noses know!"

Using an object map:

    >> var unformatted = "What does the {noun1} know that the {noun2} doesn't? No {noun2} knows!";
    >> unformatted.format({
           noun1: "mustache",
           noun2: "nose"
       });
    << "What does the mustache know that the nose doesn't? No nose knows!"
	
