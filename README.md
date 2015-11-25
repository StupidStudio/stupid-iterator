# Stupid Iterator 
A simple collection helper.

## Usage

Get next item

```javascript
var iterator = require('stupid-iterator');

var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
var current = collection[0];
current = iterator.next(current, collection); // current is collection[1]
current = iterator.next(collection[3], collection); // current is collection[0]

```

Get previous item

```javascript
var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
var current = collection[1];
current = iterator.prev(current, collection); // current is collection[0]
current = iterator.prev(current, collection); // current is collection[3]

```

API

```javascript

iterator.nextOrFalse(current, collection);
iterator.prevOrFalse(current, collection);
iterator.isFirst(current, collection);
iterator.isPrev(current, collection);
iterator.add(object, collection);
iterator.remove(object, collection);

```

Using <strong>iterator.create()</strong> Current and collection is stored in the object, so the syntax becomes easier to write and read. (See tests for more functionality, but you can basically use the same api).

```javascript
var collection = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}];
var current = collection[0];
var ite = iterator.create(current, collection);

var obj = ite.next(); // equals collection[1];
obj = ite.next(); // equals collection[2];
obj = ite.prev(); // equals collection[1];
ite.set(collection[3]);
obj = ite.get() // equals collection[3];

```


