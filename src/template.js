define([
	"@loader",
	"lodash.template"
], function(loader, template){

	return {
		instantiate: instantiate
	};

	function instantiate(load){
		var source = load.source;

		return {
			deps: [],
			execute: execute
		};

		function execute(){
			var fn = template(source);
			return loader.newModule({
				"default": fn,
				__useDefault: true
			});
		}
	}

});
