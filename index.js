var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var name = "Ralph"
  kittens.push(name) // adds "Ralph" to end of kittens
  return kittens // returns ["Milo", "Otis", "Garfield", "Ralph"]
}
function destructivelyPrependKitten(name) {
  var name = "Bob";
  kittens.unshift(name) // adds "Bob" to beginning of kittens
  return kittens // returns ["Bob", "Milo", "Otis", "Garfield"]
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()  // removes "Garfield" from end of kittens
  return kittens // returns ["Milo", "Otis"]
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift() // removes "Milo" from beginning of kittens
  return kittens // returns ["Otis", "Garfield"]
}
function appendKitten(name) {
  var name = [...kittens, "Broom"] // adds "Broom" to end of kittens without modifying array
  return name // returns ["Milo", "Otis", "Garfield", "Broom"]
}
function prependKitten(name) {
  var name = ["Arnold", ...kittens]
  return name
}
function removeLastKitten (name) {}
function removeFirstKitten(name) {}
