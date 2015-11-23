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
