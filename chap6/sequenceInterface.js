/*
Sequence Interface
Design an interface that abstracts iteration over a collection of values. An
object that provides this interface represents a sequence, and the interface
must somehow make it possible for code that uses such an object to iterate
over the sequence, looking at the element values it is made up of and having
some way to find out when the end of the sequence is reached.
When you have specified your interface, try to write a function logFive
that takes a sequence object and calls console.log on its first five elements—
or fewer, if the sequence has fewer than five elements.
Then implement an object type ArraySeq that wraps an array and allows
iteration over the array using the interface you designed. Implement an-
other object type RangeSeq that iterates over a range of integers (taking from
and to arguments to its constructor) instead.
*/
function ArraySeq(arr) {
    this.arr = arr;
    this.index = 0;
  }

  ArraySeq.prototype.next = function() {
    return this.arr[this.index++];
  }
  ArraySeq.prototype.isEnd = function() {
    return this.arr[this.index] == undefined;
  }

  function RangeSeq(start, end) {
    this.cur = start;
    this.end = end;
  }
  RangeSeq.prototype.next = function() {
    return this.cur++;
  }
  RangeSeq.prototype.isEnd = function() {
    return this.cur == this.end;
  }

  function logFive(arrseq) {
    for(var i = 0; i < 5; i++) {
      if (!arrseq.isEnd())
        console.log(arrseq.next());
    }
  }

  logFive(new ArraySeq([1, 2]));
  // → 1
  // → 2
  var arrseq_instance = new ArraySeq([1,2])
  Object.getPrototypeOf(arrseq_instance) == ArraySeq.prototype;
  // -> true
  Object.getPrototypeOf(ArraySeq) === ArraySeq.prototype; 
  // -> false
  Object.getPrototypeOf(ArraySeq) === Function.prototype;

  logFive(new RangeSeq(100, 1000));
