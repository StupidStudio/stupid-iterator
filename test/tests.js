var test = require('tape');
var iterator = require('../iterator');


/**
 * Testing the global iterator object
 */
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

test('Is first', function (t) {
    t.plan(2);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	t.equal(iterator.isFirst(collection[0], collection), true);
	t.equal(iterator.isFirst(collection[1], collection), false);
});

test('Is last', function (t) {
    t.plan(2);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	t.equal(iterator.isLast(collection[3], collection), true);
	t.equal(iterator.isLast(collection[2], collection), false);
});

test('Adds item to collection if doesnt exist', function (t) {
    t.plan(2);
    var obj = {name: 'five'};
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	iterator.add(obj, collection);
	t.equal(obj, collection[4]);
	iterator.add(obj, collection);
	t.equal(collection.length, 5);
});

test('Removes item from collection if it exist', function (t) {
    t.plan(2);
    var obj = {name: 'five'};
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}, obj];
	iterator.remove(obj, collection);
	t.equal(collection.length, 4);
	iterator.remove(obj, collection);
	t.equal(collection.length, 4);
});


/**
 * Testing the iterator.create() object
 */

test('Create(): Next, NextOrFalse', function (t) {
	t.plan(3);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[0];
	var ite = iterator.create(current, collection);

	t.equal(ite.next(), collection[1]);
	ite.set(collection[2]);
	t.equal(ite.nextOrFalse(), collection[3]);
	t.equal(ite.nextOrFalse(), false);
});

test('Create(): Prev, PrevOrFalse', function (t) {
    t.plan(3);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[1];
	var ite = iterator.create(current, collection);

	t.equal(ite.prev(), collection[0]);
	ite.set(collection[1]);
	t.equal(ite.prevOrFalse(), collection[0]);
	t.equal(ite.prevOrFalse(), false);
});

test('Create(): isFirst, isLast', function (t) {
    t.plan(4);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var current = collection[0];
	var ite = iterator.create(current, collection);

	t.ok(ite.isFirst()); // true
	ite.next();
	t.notOk(ite.isFirst()); // false
	ite.set(collection[3]);
	t.ok(ite.isLast()); // true
	ite.prev();
	t.notOk(ite.isLast()); // false
});

test('Create(): add, remove', function (t) {
    t.plan(4);
	var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
	var object = {name:'five'};
	var current = collection[0];
	var ite = iterator.create(current, collection);

	ite.add(object);
	t.equal(collection.length, 5);
	ite.add(object);
	t.equal(collection.length, 5);
	ite.remove(object);
	t.equal(collection.length, 4);
	ite.remove(object);
	t.equal(collection.length, 4);
});




