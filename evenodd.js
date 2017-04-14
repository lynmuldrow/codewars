// Even-Odd Kata

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// What??? Ok, so the first thing I thought was that we're looking for a sorting algorithm. Why did I think this? 
// Because, it's asking me to compare a thing, then sort it. There's a few popular ones like bubblesort and mergesort, but Even-Odd Sort does the trick. 
// Odd-even sort is a comparison of numbers next to one another, then switching elements if the first is greater than the second. 


// So how to solve? Here's the kata again: 
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// We are given this: 

// function even_or_odd(arr) {
 
  // }

  // So we know that the code is a function call. Let's see...

  function even_or_odd(number) {
  	// let's add a variable to handle the argument passed to the even_or_odd function: 
	var x = number % 2;

	// and for the logic, we'll need to use an 'if' statement- if x is 0, return even. If not, return odd! 
  if (x === 0) {
		return "Even";
	} else {
		return "Odd";
	}; 
}

// don't forget your semicolons, and don't overthink! Broken down into sentence form, this reads: 
// "I want to determine if a number is even or odd. Let's create a thing that takes in a number, divides it by two, then considers if it's 0 or not. If it's zero, return even. If not, return odd."


// Here's another (better) solution I learned of through community answers: 
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"  
  // look- everything is condensed! same logic, but written more efficiently. 
}






