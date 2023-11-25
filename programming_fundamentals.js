
// ---------- ***** ---------- Combining Datatypes & Callbacks ---------- ***** ---------- //


// -------------------- Section 1:  Programming Fundamentals -------------------- //

// ----- Common programming principles ----- //
// DRY
    // Maximize the programs construct to aid in keeping your code as concise as possible with an effort to limit repeating code.
// KISS
    // Do not over complicate your code if there is a more direct and simple way to write it.
// Avoid creating a YAGNI
    // Do not try to program funcionality prior to the point of actually needing it.
// Do the simplest thing that could possibly work
    // Don't over complicate your code for no reason
// Don't make me think
    // If code is written in a complicated way, there is likely a more concise way that would be easier for others to read.
// Write code for the maintainer
    // Add comments, a lot of comments, a lot of good comments for the future you... which may not acutally be you
// Single responsibility principle
    // Do not have multiple tasks assigned to the functions you write.
// Avoid premature optimization
    // Trying to optimize your code typically isn't worth the time it takes to make it more efficient.
        // After reading this it makes sense but coming into this course I had a preconceived notion that code optimization was way more of a concern. 
// Separation of concerns
    // Try to avoid overlapping modules of code.

// -**- I wouldn't necessarily say I am having trouble specifically with one of these vs another. My concern at this point in time is writing code and comments that work and are not too difficult to understand. Level two for me is once I feel comfortable enough to write code more as a reflex, then I would be able to dial in on which of these are the struggle points. -**- //


// ----- Commenting Code ----- //

// Create a function with a variable "f" and a parameter of l
const f = l => {
    // Creating variables and assign them values including n being an iterative count starting at 0.
    let es = 0, p = 0, c = 1, n = 0
    // Creating a loop that checks if variable c is less than or equal to l until c is greater than l.
    while (c <= l) {
        // Adding variable c to p and setting the resulting value to variable n.
      n = c + p;
      // Switching the values by setting c equal to the value of n and p equal to the value of c. 
      [c, p] = [n, c]
        // Using the remainder operator to evaluate if the value will be an even then add it to variable es.
      es += (c % 2 === 0) ? c : 0
    }
    // Return the value of es
    return es
  }
  // Log the results of function "f" with an input value of 55.
  console.log(f(55))
  

  // - Fibonacci Even Numbers

  // - I would rather start with f2 I find the way that function is written in a way that I can follow easier.

  // - Interesting that removing that semi-colon causes it to error. I didn't expect that.


