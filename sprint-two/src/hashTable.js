

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.resize = function(size) {
  var arraylength;
  if (size > 0.75*this._limit){
    arraylength = this._limit*2;
  }else if (size < 0.25*this._limit){
    arraylength = this._limit/2;
  }

  let temp = this._storage;

  this._storage = LimitedArray(arraylength);

  let container = this._storage;


  temp.each(function(bucket) {
    if (bucket) {

      for (let i = 0; i < bucket.length; i++) {
        let k = bucket[i][0];
        let v = bucket[i][1];
        container.insert(k, v);
      }
    }
  })

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // returns specific index after passing into hashing function
  var container = this._storage;

  if (!container.get(index)) {
    let bucket = [[k, v]];
    container.set(index, bucket);
    this.size++;
    this.resize(this.size);
  } else {
    let existBucket = container.get(index);
    for (let i = 0; i < existBucket.length; i++) {
      if (existBucket[i][0] === k) {
        existBucket[i][1] = v;
      } else if (i === existBucket.length - 1) {
        existBucket.push([k, v]);
        this.size++;
        this.resize(this.size);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); // returns specific index after passing into hashing function
  var container = this._storage;
  let position = container.get(index);
  for (let i = 0; i < position.length; i++) {
    if (position[i][0] === k) {
      return position[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); // returns specific index after passing into hashing function
  var container = this._storage;
  let position = container.get(index);

  if (!position){
    return undefined;
  }else{
    for (var i = 0; i < position.length; i++){
      if (position[i][0] === k){
        position.splice(i, 1);
        this.size--;
        this.resize(this.size);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert : O(n);
 retrieve : O(n);
 remove : O(n);
 */

// [  [[k, v], [b, c], [a,]]  undefined, undefined,       ]