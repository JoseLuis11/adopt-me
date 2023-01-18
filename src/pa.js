var ImmutableMap = function() {

    /* Implementation details for ImmutableMap */
    var entriesSymbol = Symbol('entries');

    function ImmutableMap() {
        throw new Error('This constructor is private, use ImmutableMap.Builder');
    }

    function PrivateImmutableMap(entries) {
        this[entriesSymbol] = new Map(entries);
    }
    PrivateImmutableMap.prototype = ImmutableMap.prototype = Object.create(Map.prototype);
    PrivateImmutableMap.prototype.constructor = PrivateImmutableMap;

    /* Builder class for ImmutableMap */
    function Builder() {
        this[entriesSymbol] = new Map();
    }

    Builder.prototype.add = function(key, value) {
        this[entriesSymbol].set(key, value);
        return this;
    }

    Builder.prototype.build = function() {
        return new PrivateImmutableMap(this[entriesSymbol]);
    };

    ImmutableMap.Builder = Builder;

    /* Properties and methods on ImmutableMap */
    Object.defineProperty(PrivateImmutableMap.prototype, "size", {get: function() {
        return this[entriesSymbol].size;
    }});

    function valueToString(v) {
        if (v === null) return "null";
        if (v === undefined) return "undefined";
        if (typeof v === 'string') return "'" + v.replace(/['\\]/g, '\\$&')  + "'";
        return v.valueOf();
    }
    
    PrivateImmutableMap.prototype.valueOf = function() {
        var value = [];
        for (var [k, v] of this[entriesSymbol].entries()) {
            value.push(valueToString(k) + " => " + valueToString(v));
        }

        return "ImmutableMap { " + value.join(", ") + " }";
    };

    PrivateImmutableMap.prototype.toString = function() {
        return "[object ImmutableMap]";
    };

    PrivateImmutableMap.prototype.inspect = PrivateImmutableMap.prototype.valueOf;

    PrivateImmutableMap.prototype.clear = function() {
        throw new Error("This map is immutable");
    };

    PrivateImmutableMap.prototype.delete = function() {
        throw new Error("This map is immutable");
    };

    PrivateImmutableMap.prototype.set = function() {
        throw new Error("This map is immutable");
    };

    PrivateImmutableMap.prototype.entries = function() {
        return this[entriesSymbol].entries();
    };

    PrivateImmutableMap.prototype.forEach = function(callBackFn, thisArg) {
        return this[entriesSymbol].forEach(callBackFn, thisArg);
    };
    
    PrivateImmutableMap.prototype.get = function(key) {
        return this[entriesSymbol].get(key);
    };
    
    PrivateImmutableMap.prototype.has = function(key) {
        return this[entriesSymbol].has(key);
    };

    PrivateImmutableMap.prototype.keys = function() {
        return this[entriesSymbol].keys();
    };

    PrivateImmutableMap.prototype.values = function() {
        return this[entriesSymbol].values();
    };

    PrivateImmutableMap.prototype[Symbol.iterator] = function() {
        return this[entriesSymbol][Symbol.iterator]();
    };

    return ImmutableMap;

}();


let map = new Map();
map.set('a', 1);
map.set('b', 2);

let immutablemapBuilder = new ImmutableMap.Builder();

for (let [key, value] of map.entries()) {
    immutablemapBuilder.add(key, value);
}

console.log(immutablemapBuilder.build());

&__header-cell {
    &--resize {
      &.extra-extra-large-column {
        min-width: 283px;
      }
      &.mini-column {
        min-width: 95px;
      }
    }
  }