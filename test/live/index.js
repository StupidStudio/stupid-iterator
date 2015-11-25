var iterator = require('../../iterator');

var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
var newObject = {name:'five'};
var current = collection[0];
var ite = iterator.create(current, collection);

console.log(ite.set(collection[3]));
console.log("Current:", ite.get());
console.log(ite.remove(collection[3]), collection.length);
// console.log(ite.next(), collection.length);
// console.log(ite.next(), collection.length);
// console.log(ite.prev(), collection.length);
// console.log(ite.next(), collection.length);
// console.log(ite.nextOrFalse(), collection.length);
// console.log(ite.add(newObject), collection.length);
// console.log(ite.next(), collection.length);
// console.log(ite.remove(newObject), collection.length);
// console.log(ite.next(), collection.length);
// console.log(ite.set(collection[2]), collection.length);

// iterator.nextOrFalse(current, collection);
// iterator.prevOrFalse(current, collection);
// iterator.isFirst(current, collection);
// iterator.isPrev(current, collection);
// iterator.add(object, collection);
// iterator.remove(object, collection);