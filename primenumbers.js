function findPrimes(arr) {
    const primes = [];
  
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    for (let num of arr) {
      if (isPrime(num)) primes.push(num);
    }
    return primes;
  }
  
  // Usage Example
  console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));