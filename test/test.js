define([
	"@loader",
	"steal-qunit"
], function(loader, QUnit){

	QUnit.module("steal-template");

	QUnit.test("basics works", function(){

		loader.import("test/basics/hello.txt!steal-template").then(function(tmpl){
			var fn = new Function(tmpl({name: "world"}));

			QUnit.equal(fn(), "Hello world!", "Template created correctly");
		}).then(QUnit.start);

		QUnit.stop();
	});

});
