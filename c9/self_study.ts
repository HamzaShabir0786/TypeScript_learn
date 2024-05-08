//in this file I'll learn all methods of array with the help of Chat GPT..

// There are five Adding/Removing methods [puch(),pop(),shift(),unshift(),splice()]
// 1- push() - Adds one or more elements to the end of an array and returns the new length of the array.
let first = ["karachi","lahore","sialkot"];
first.push("Gujranwala")
console.log(first)
console.log('Push method end here')

//2- pop() - Removes the last element from an array and returns that element.
let second = ["burger", 'pizza','cake','biryani'];
let ss =second.pop()
console.log(second)
console.log(ss)
console.log(second)
console.log('pop method end here')


//3- shift() - Removes the first element from an array and returns that element.
let third = ['forth','fifth', 'sixth', 'seventh']
let tt = third.shift()
console.log(third)
console.log(tt)
console.log(third)
console.log("shift method end here")

//4- unshift() - Adds one or more elements to the beginning of an array and returns the new length.
let forth = ["one",'two','three','four']
let ff = forth.unshift("unshift one")
console.log(forth)
console.log(ff)
console.log(forth)
console.log("unshift method end here")

//5- splice() - Adds and/or removes elements from an array.
let fifth = ['mango', 'banana', "banana", 'watermellon']
let ff2= fifth.splice(1,1,"hello", 'dear')
console.log(fifth)
console.log(ff2)
console.log(fifth)
console.log("splice method end here")

//There are five Searching and Location methods [].
//6- indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let sixth = ['Apple',"Banana",'Canon','donald']
console.log(sixth)
console.log(sixth.indexOf("Banana"))
console.log("indexOf method end here")

//7- lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
let seventh = [1,2,3,4,5,6,7,8,1,12];
console.log(seventh)
console.log(seventh.lastIndexOf(1))
console.log("lastOfIndex method end here")

//8- includes() - Determines whether an array includes a certain element, returning true or false as appropriate.
let eight = ['mango','banana',"hello",'dear',0]
console.log(eight)
console.log(eight.includes('mango')) //it's return true then "mango " include in array
console.log(eight.includes('mango', 0)) //it's return true the "mango" at 0 index. 
console.log("includes() method end here")//Note: it's doesn't check number datatype's index number.