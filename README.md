String.prototype.format
=======================

Use this script to improve the readability your string formatting. It's meant to be very simple and
limited, not a fully-functional port of any language or library's equivalent format method.

For example, given:

	var unformatted = "What does the {0} know that the {1} doesn't? No {1} knows!";
	console.log(unformatted.format("mustache", "nose"));
	
The console will log: "What does the mustache know that the nose doesn't? No nose knows!"

Or, given:
	
	var unformatted = "What does the {} know that the {} doesn't? None of the {} know!";
	console.log(unformatted.format("mustache", "nose", "noses"));
	
The console will log: "What does the mustache know that the nose doesn't? None of the noses know!"
This is similar to the first example, except that the numbers are implicit.

Finally, given:

	var unformatted = "What does the {noun1} know that the {noun2} doesn't? No {noun2} knows!";
	
    console.log(unformatted.format({
		noun1: "mustache",
		noun2: "nose"
	}));
	
The console will log: "What does the mustache know that the nose doesn't? No nose knows!"
	
