function generateArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  // Usage Example
  console.log(generateArray(4, 7));
  console.log(generateArray(-4, 7));