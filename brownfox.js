

function swapCase(str) {
  return str.split('').map(char => char === char.toUpperCase() ?
   char.toLowerCase() : char.toUpperCase()).join('');
}

// Usage Example
console.log(swapCase('The Quick Brown Fox Jumped Over The Fence'));