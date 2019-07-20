

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // returns specific index after passing into hashing function
  var container = this._storage;
  if (!container.get(index)) {
    let bucket = [[k, v]];
    container.set(index, bucket);
  } else {
    let existBucket = container.get(index);
    for (let i = 0; i < existBucket.length; i++) {
      if (existBucket[i][0] === k) {
        existBucket[i][1] = v;
      } else if (i === existBucket.length - 1) {
        existBucket.push([k, v]);
      }
    }
  }
    // location[index].bucket.push([k, v]);


  //this._storage.set(index, bucket);
  //bucket.set(0, v);
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

