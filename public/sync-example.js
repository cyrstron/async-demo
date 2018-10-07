function Third(str) {
  return str + " Morgan.";
}

function Second() {
  return Third("Dexter");
}

function First() {
  var name = Second();
  console.log("My name is " + name);
}

First();