var test = require('tape');
var iterator = require('../iterator');

test('Gets next item', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[0];
	current = iterator.next(current, collection);
	t.equal(current, collection[1]);
});

test('Gets first item if current is last', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[3];
	current = iterator.next(current, collection);
	t.equal(current, collection[0]);
});

test('Gets previous item', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[1];
	current = iterator.prev(current, collection);
	t.equal(current, collection[0]);
});

test('Gets last item if current is last', function (t) {
    t.plan(1);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[0];
	current = iterator.prev(current, collection);
	t.equal(current, collection[3]);
});

test('Returns next or false', function (t) {
    t.plan(2);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[2];
	current = iterator.nextOrFalse(current, collection);
	t.equal(current, collection[3]);
	current = iterator.nextOrFalse(current, collection);
	t.equal(current, false);
});

test('Returns prev or false', function (t) {
    t.plan(2);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[1];
	current = iterator.prevOrFalse(current, collection);
	t.equal(current, collection[0]);
	current = iterator.prevOrFalse(current, collection);
	t.equal(current, false);
});