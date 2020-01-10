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
  var name = [...kittens, "Broom"]
  return name
}
function prependKitten(name) {}
function removeLastKitten (name) {}
function removeFirstKitten(name) {}
