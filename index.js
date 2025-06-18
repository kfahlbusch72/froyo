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

function countFlavors(flavorArray) {
  const flavorCounts = {};

  flavorArray.forEach((flavor) => {
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  });

  return flavorCounts;
}

const flavorInput = prompt(
  "Please enter your froyo flavors, separated by commas:"
);

if (flavorInput) {
  const flavors = flavorInput.split(",");

  const flavorCounts = countFlavors(flavors);

  console.log("Your froyo order:");
  console.log(flavorCounts);
} else {
  console.log("No flavors entered.");
}
