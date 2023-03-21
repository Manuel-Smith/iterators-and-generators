/**
 *      1. Create a generator function called "getRandomNumber"
 *          that generates a random number between 1 - 10 (inclusive)
 *          exactly 5 times.
 *
 *
 *      2. Create another generator function called "groceryList"
 *          Inside of "groceryList", create a variable called
 *          "groceries" that point at:
 *          ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
 *
 *
 *          The generator will yield a random grocery from "groceries"
 *          and also remove that grocery item from the list of "groceries"
 *          Eg: const groceries = groceryList();
 *              groceries.next() => "Cookie"
 *              groceries.next() => "Soup"
 *
 *      3. Create 2 generator Objects calling each of the 2
 *          generator functions above ^
 *
 *      4. Create a regular for loop that will loop 5 times and calls
 *      .next()on each of the generator Objects ^ to  print out a
 *      random number followed by a random grocery:
 *      Eg: 5 Avocado
 *          10 Soup
 */

const getRandomNumber = function* () {
  let count = 0;
  while (count < 5) {
    yield Math.round(Math.random() * (10 - 1) + 1);
    count++;
  }
};

const groceryList = function* (passedIndex) {
  let groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
  let groceryListLength = groceries.length;

  for (let i = 0; i < groceryListLength; i++) {
    const randomIndex = Math.floor(Math.random() * groceries.length);
    let removedGroceryItem = groceries.splice(randomIndex, 1)[0];
    yield `${passedIndex.next().value} ${removedGroceryItem}`;
  }
};

let randomNumberGenerator = getRandomNumber();
let randomGroceryGenerator = groceryList(randomNumberGenerator);

for (let count of randomGroceryGenerator) {
  console.log(count);
}
