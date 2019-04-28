function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myAdjective + " " + myNoun;
  result += " " + myAdverb + " " + myVerb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));
