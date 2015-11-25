(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Iterator iterates over a collection
 * @example var current = iterator.next(current, collection);
 */
var iterator = {
	/**
	 * Get the next item in a collection
	 * @example var current = iterator.next(current, collection);
	 * @param {object} current The current item (thats in the collection)
	 * @param {array} collection The collection (that hold the current)
	 * @return {object} the new current
	 */
 	next: function(current, collection){
		return collection[ collection.indexOf(current) + 1 ] || collection[ 0 ];
	},

	/**
	 * Get the previous item in a collection
	 * @example var current = iterator.prev(current, collection);
	 * @param {object} current The current item (thats in the collection)
	 * @param {array} collection The collection (that hold the current)
	 * @return {object} the new current
	 */
	prev: function(current, collection){
		return collection[ collection.indexOf(current) - 1 ] || collection[ collection.length - 1 ];
	},

	/**
	 * Get the next item in a collection or return false
	 * @example var current = iterator.nextOrFalse(current, collection);
	 * @param {object} current The current item (thats in the collection)
	 * @param {array} collection The collection (that hold the current)
	 * @return {object | boolean} the new current or false
	 */
	nextOrFalse: function(current, collection){
		return collection[ collection.indexOf(current) + 1 ] || false;
	},

	/**
	 * Get the previous item in a collection or return false
	 * @example var current = iterator.prevOrFalse(current, collection);
	 * @param {object} current The current item (thats in the collection)
	 * @param {array} collection The collection (that hold the current)
	 * @return {object | boolean} the new current or false
	 */
	prevOrFalse: function(current, collection){
		return collection[ collection.indexOf(current) - 1 ] || false;
	},

	/**
	 * Check if item is the first in the collection
	 * @example var current = iterator.isFirst(current, collection);
	 * @param {object} current The current item (thats in the collection)
	 * @param {array} collection The collection (that hold the current)
	 * @return {boolean}
	 */
	isFirst:function(current, collection){
		return Boolean(current === collection[ 0 ]);
	},

	/**
	 * Check if item is the last in the collection
	 * @example var current = iterator.isLast(current, collection);
	 * @param {object} current The current item (thats in the collection)
	 * @param {array} collection The collection (that hold the current)
	 * @return {boolean}
	 */
	isLast: function(current, collection){
		return Boolean(current === collection[ collection.length - 1 ]);
	},

	/**
	 * Add newObject to collection if its not already in it.
	 * @example iterator.add(newObject, collection);
	 * @param {object} newObject 
	 * @param {array} collection The collection
	 * @return {number} Return the location object have in array
	 */
	add: function(newObject, collection){
		var index = collection.indexOf(newObject);
		if (index === -1) collection.push(newObject);
	},

	/**
	 * Removes object from collection if its in it.
	 * @example iterator.remove(object, collection);
	 * @param {object} object 
	 * @param {array} collection The collection
	 * @return {number} Return the location object had in array
	 */
	remove: function(object, collection){
        var index = collection.indexOf(object);
        if (index != -1) collection.splice(index, 1);
	},

	/**
	 * Return an object with prefixed current and collection
	 * @example iterator.create(current, collection);
	 * @param {object} current The current item (thats in the collection)
	 * @param {array} collection The collection (that hold the current)
	 * @return {object} return new object that uses iterator
	 */
	create: function(current, collection){
		return {

			/**
			 * Get next in collection
			 * @return {object} The current object
			 */
			next: function(){
				current = iterator.next(current, collection);
				return current;
			},

			/**
			 * Get previous in collection
			 * @return {object} The current object
			 */
			prev: function(){
				current = iterator.prev(current, collection);
				return current;
			},

			/**
			 * Get previous or false (set current if not false)
			 * @return {object | boolean} The current object or false
			 */
			nextOrFalse: function(){
				var objectOrFalse = iterator.nextOrFalse(current, collection);
				current = objectOrFalse || current;
				return objectOrFalse;
			},

			/**
			 * Get next or false (set current if not false)
			 * @return {object | boolean} The current object or false
			 */
			prevOrFalse: function(){
				var objectOrFalse = iterator.prevOrFalse(current, collection);
				current = objectOrFalse || current;
				return objectOrFalse;
			},

			/**
			 * Is current first item in array
			 * @return {boolean} True / false
			 */
			isFirst: function(){
				return iterator.isFirst(current, collection);
			},

			/**
			 * Is current last item in array
			 * @return {boolean} True / false
			 */
			isLast: function(){
				return iterator.isLast(current, collection);
			},

			/**
			 * Add object to collection
			 * @return {object} The current object
			 */
			add: function(object){
				iterator.add(object, collection);
				return current;
			},

			/**
			 * Remove object from collection
			 * Set current to new object if current if removed
			 * @return {object} The current object
			 */
			remove: function(object){

				/**
				 * If object is current do something
				 */
				if(object === current){

					/**
					 * If current is first, set current to the next item
					 * Else set current to previous item
					 */
					if(iterator.isFirst(current, collection)){
						current = iterator.next(current, collection);	
					}else{
						current = iterator.prev(current, collection);
					}
				}

				/** Return object from collection */
				iterator.remove(object, collection);

				return current;
			},

			/**
			 * Set object to current
			 * @return {object} The current object
			 */
			set: function(object){
				current = object;
				return current;
			},

			/**
			 * Get the current object
			 * @return {object} The current object
			 */
			get: function(){
				return current;
			}
		};
	}
}

/** @export */
module.exports = iterator;
},{}],2:[function(require,module,exports){
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
},{"../../iterator":1}]},{},[2]);
