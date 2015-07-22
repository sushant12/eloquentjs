/*
Another Cell
Implement a cell type named StretchCell(inner, width, height) that conforms
to the table cell interface described earlier in the chapter. It should wrap
another cell (like UnderlinedCell does) and ensure that the resulting cell has
at least the given width and height , even if the inner cell would naturally be
smaller.
*/
"use strict";
// Layout Out a Table p.108
function repeat(string, times) {
  var result = "";
  var i = 0;
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}
function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(accWidth, line) {
    return Math.max(accWidth, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
}

function StretchCell(inner, width, height)
{
    this.inner = inner;
    this.width = width;
    this.height = height;
}

 // minWidth
  StretchCell.prototype.minWidth = function() {
    var innerWidth = this.inner.minWidth();
    return this.width > innerWidth ? this.width : innerWidth;
  }
  // minHeight
  StretchCell.prototype.minHeight = function() {
    var innerHeight = this.inner.minHeight();
    return this.height > innerHeight ? this.height : innerHeight;
  }
  // draw
  StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(this.minWidth(), this.minHeight());
  }
  var sc = new StretchCell(new TextCell("abc"), 1, 2);
  console.log(sc.minWidth());
  console.log(sc.minHeight());
  console.log(sc.draw(3, 2));
