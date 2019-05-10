var count = 0;

function cc(card) {
  // Only change code below this line
  let cards_1 = [2, 3, 4, 5, 6];
  let cards_0 = [7 , 8, 9];
  let cards_m1 = [10, 'J', 'Q', 'K', 'A']
  
  if (cards_1.includes(card))
    count++;
  else if (cards_0.includes(card))
    ;
  else if (cards_m1.includes(card))
    count--;
  return (count + ((count > 0) ? " Bet" : " Hold"));
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
