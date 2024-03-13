// Helper function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
  }
  
  // Helper function to calculate the area of a circle
  function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Helper function to check if a number is prime
  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
  
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  // Example usage
  console.log(calculateRectangleArea(5, 6)); // Outputs: 30
  console.log(calculateCircleArea(3)); // Outputs: 28.274333882308138
  console.log(isPrime(7)); // Outputs: true
  console.log(isPrime(10)); // Outputs: false
  
