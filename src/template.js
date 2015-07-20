define([
	"@loader",
	"lodash.template"
], function(loader, template){

	return {
		translate: translate
	};

	function translate(load){
		var source = load.source;
		var fn = template(source);

		return "def" + "ine([], function(){\n" +
			"\treturn " + fn.source +
			"\n});";
	}

});
