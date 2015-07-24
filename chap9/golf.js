/*
Regexp Golf
Code golf is a term used for the game of trying to express a particular pro-
gram in as few characters as possible. Similarly, regexp golf is the practice of
writing as tiny a regular expression as possible to match a given pattern, and
only that pattern.
For each of the following items, write a regular expression to test whether
any of the given substrings occur in a string. The regular expression should
match only strings containing one of the substrings described. Do not worry
about word boundaries unless explicitly mentioned. When your expression
works, see whether you can make it any smaller.
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a dot, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e
Refer to the table in the chapter summary for help. Test each solution
with a few test strings.
*/

(function(){
"use strict";
console.log(/ca[rt]/.test('car\n'));
console.log(/pr?op/.test('prop\n'));
console.log(/ferr(et|y|ari)/.test('ferrari'));
console.log(/ious\b/.test('AbC\n'));
console.log(/\s[.,;]/.test(' ?\n'));
console.log(/\w{7,}/.test('helloIloveYouWont\n'));
console.log(/\b[a-df-z]+\b/i.test('hllo\n'));
})();
