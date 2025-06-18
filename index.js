// prompt user for flavors

// turn input into an arrays of flavors using .split()

// create empty object

// const froyo = {};
// console.log(froyo);
// froyo["vanilla"] = 1;
// console.log(froyo);
// froyo["vanilla"] += 1;
// console.log(froyo);

//
// loop through array

// check if key is in object
// if key is NOT in object, set key and set valve of key to 1
// if key IS in object, then increase value by 1

function processFroyoOrder() {
  const userInput = prompt("Enter a comma-separated list of froyo flavors:");
  if (userInput === null) {
    return;
  }

  const flavors = userInput.split(",");
  const flavorCounts = {};

  for (const flavor of flavors) {
    const trimmedFlavor = flavor.trim();
    if (trimmedFlavor) {
      flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
    }
  }

  console.log(flavorCounts);
}

processFroyoOrder();
