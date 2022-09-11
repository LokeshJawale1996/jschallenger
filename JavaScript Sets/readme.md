The Set object was first introduced by ES6. A Set can store a collection of unique values of any type. It has a lot of similarities with Javascript Arrays.

## Keys in Javascript Sets

The most obvious difference between Arrays and Sets is that Sets can store each element only once, while Arrays allow for duplicates. This has to do with the fact that Sets are keyed-collections - as opposed to indexed-collections in case of Arrays. Keyed collections are ordered by a key. Therefore, accessing a Set element can not be done using an index, as with Arrays, but rather by using its key. The key of a Set element equals its value.

## Accessing Elements in a Javascript Set

You can access a Set element from a Set named mySet with mySet.has(value/key). For example, if you want to check whether mySet has an element with value 10, you would type mySet.has(10). If a Set contains, for example, an array const a = [1,2,3], then you would access it using its reference: mySet.has(a). However, mySet.has([1,2,3]) would return false.

## Creating a Javascript Set

Creating a Set can be done in two ways. Either by initiating it with an iterable object as parameter:new Set([iterable]). Iterable objects are for example arrays and strings. new Set([1,2,3]) would create a Set with the elements 1, 2, and 3. The other way to create a Set is to first initiate an empty Set and then add the elements one by one with Set.prototype.add(). And here comes the surprising part: when the number of elements increase a lot, the latter way can save a lot of time.

## Javascript Sets and Time Benefit

When dealing with a lot of data, Sets can give you a real speed boost in comparison to, for example, arrays. This is due to the fact that the time of executing a method on an existing Set does not increase with the number of elements in the Set. An array however needs more time – e.g. to add an item using Array.prototype.push() – the more items it has. Therefore, Sets can make your code a lot faster.
There is an obsticle though. Initiating a Set is considerably less efficient than initiating an Array. You have to account for this when dealing with Sets. The more you have to create new Sets or switch between Arrays and Sets in order to achieve what you want to achieve, the less time you save. You might even end up consuming more time than by simply doing everything with Arrays.
