function isDeepEquals(objA, objB) {
  const sortA = Object.keys(objA).sort();
  const sortB = Object.keys(objB).sort();

  if (sortA.length !== sortB.length) {
    return false;
  }
  for (let i = 0; i < sortA.length; i++) {
    const key = sortA[i];
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

// Test cases for the isDeepEquals function
function main() {
  console.log(isDeepEquals({}, {})); // true
  console.log(isDeepEquals({ id: 1, name: "a" }, { id: 1, name: "a" })); // true
  console.log(isDeepEquals({ id: 1, name: "a" }, { name: "a", id: 1 })); // true
  console.log(isDeepEquals({ id: 1, name: "a" }, { id: 2, name: "a" })); // false
}

main();
