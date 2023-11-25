
// ---------- ***** ---------- Combining Datatypes & Callbacks ---------- ***** ---------- //


// -------------------- Section 2:  Combining Datatypes -------------------- //




// ----- Combine objects, arrays, and functions ----- //

// 1. -------------------------------------- //
// Building the object and array
const crayonBox = {
    sticks: ["Red", "Oragne", "Yellow", "Green", "Blue", "Indigo", "Violet"]
}
// Logging "Green"
console.log(crayonBox.sticks[3]) 


// 2. -------------------------------------- //
// Creating the object and proprerty
const bottle = {
    cap: ["metal", "plastic"],
    color: ["blue", "white"]
}

// Logging "blue"
console.log(bottle.color[0])


// 3. -------------------------------------- //
// Creating the array
const receipt = [
    {
        name: "Avocado",
        price: 3.50,
    },
    {
        name: "Lemon",
        price: 0.75
    },
    {
        name: "Cilantro",
        price: 1.50
    },
    {
        name: "Cumin",
        price: 2.25
    },
    {
        name: "Corona",
        price: 21.50
    }

]

// Logging Cilantro
console.log(receipt[2].name)


// 4. -------------------------------------- //
// Creating an array within an array
const apartmentBuilding = [
    "tenants", 
    [
        "Joy","Kyle","Alex","David"
    ]
]

// Logging a tenant
console.log(apartmentBuilding[1][1])




// ----- Combine objects, arrays, and functions more than one level deep ----- //

// 1.
// Creating a function 
const knit = () => {
    return {
        item: "sweater",
        size: "large",
        team: "Sabres"
    }
}

// Calling the property "team" from the function knit to return Sabres
console.log(knit().team)


// 2.
// Create a function
const crayonSelector = () => {
    return {
        // Create an object that calls an array
        crayons: crayonBox.sticks
    }
}

// Log the color "Orange"
console.log(crayonSelector().crayons[1])


// 3.
// Create a function
function powerButton() {
    // Creating another function inside the outer function that logs a statement
    function options() {
        // Logging a statement
        console.log("Select a song");
    }
    // Returning the sub function
    return options;
}

// Invoking the outer function and storing the results in a variable
const flameOn = powerButton();
// Invoking the variable
flameOn()



// ----- Model a Vending Machine Model a vending machine ----- //

//Creating a function containing an array with multiple objects
const vendingMachine = () => {
    // The array
    const snacks = [
        {
            name: "Lays",
            price: 1.50
        },
        {
            name: "Root Beer",
            price: 2.25 
        },
        {
            name: "Twix",
            price: 2.50 
        },
    ];

    // This function has a parameter where the snack values can be passed 
    function vend(treats) {
        // Checking to see if the user value entered is a vaild selection
        if (treats >= 0 && treats < snacks.length) {
            // Putting the selected snack into a variable
            const selectedSnack = snacks[treats];
            // Logging a response for a vaild snack request by name and price
            console.log(`You have purchased ${selectedSnack.name} for ${selectedSnack.price}.`)
        } else {
            // Logging an error message is an value that is not vaild was used.
            console.log(`Invalid snack index: ${treats}`)
        }
    } 
    // Return the vend function 
    return {
        vend
    }
}
// Invoking the outer function and storing it in a variable
const dispense = vendingMachine();
// Using the dispense variable and inner function to select and purchase a snack
dispense.vend(2); 



// ----- Callbacks ----- //

// 1.
  // Function to add two numbers
  function add(num1, num2) {
    return num1 + num2;
  }
  console.log(add(2, 3))
// 2.
  // Function to subtract two numbers
  function subtract(num1, num2) {
    return num1 - num2;
  }
  console.log(subtract(2, 3))
// 3.
  // Function to multiply two numbers
  function multiply(num1, num2) {
    return num1 * num2;
  }
  console.log(multiply(2, 3))
// 4.
  // Function to divide two numbers
  function divide(num1, num2) {
    return num1 / num2;
  }
  console.log(divide(2, 3))
// 5. / 6.
  // Function to calculate based on an operator function
  function calculate(num1, num2, operates) {
    return operates(num1, num2);
  }
// 7.
  // Calling calculate with different operation functions
  const calc1 = calculate(5, 3, add);
  console.log("Plus:", calc1); // Output: 8
  
  const calc2 = calculate(10, 4, subtract);
  console.log("Minus:", calc2); // Output: 6
  
  const calc3 = calculate(2, 3, multiply);
  console.log("Times:", calc3); // Output: 6
  
  const calc4 = calculate(8, 2, divide);
  console.log("By:", calc4); // Output: 4



// Function definition placement

const bar = () => {
    console.log('bar here');
    }
    bar();
    
const foo = () => {
    console.log('foo here');
    }
    foo();


// Error Reading


// foo();  /* We cannot invoke foo() before initializing the function, foo(); should be moved below the bottom curly bracket */ 

// const foo ()=>{  /* There is a "=" missing between foo & () in the const variable declaration */
//     console.log('hi');
// }






// -------------------- Section 3:  Array Methods with Callbacks -------------------- //



// ----- Working with Arrays ----- //

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


// Every
// 1.
let allEven = nums.every(e => e % 2 === 0)
console.log(allEven)
// 2.
let charLen = panagram.every(c => c.length < 8)
console.log(charLen)


// Filter
// 1.
let belowFour = nums.filter(e => e < 4)
console.log(belowFour)
// 2.
let evenLen = panagram.filter(c => c.length % 2 === 0)
console.log(evenLen)


// Find
// 1.
let divByFive = nums.find(e => e % 5 === 0)
console.log(divByFive)
// 2.
let sixPlusChars = panagram.find(c => c.length > 6)
console.log(sixPlusChars)


// FindIndex
// 1.
let indexDivThree = nums.findIndex(e => e % 3 === 0)
console.log(indexDivThree)
// 2.
let charOne = panagram.findIndex(c => c.length < 2)
console.log(charOne)


// For Each
// 1.
nums.forEach(e => {
    const newNum = e * 3
    console.log(newNum)
})
// 2.
panagram.forEach((c) => {
    console.log(c + "!");
  })


// Thought Questions
// The original array would still be the same.
console.log(panagram)
// Using the .push function one could store the value in a new array


// Map
// 1.
const multiNums = nums.map(e => e * 100);
console.log(multiNums);
// 2.
const upperPan = panagram.map(c => c.toUpperCase())
console.log(upperPan)


// Thought Questions
// The original array would still be the same since these were saved in a new array
console.log(nums)
// I believe so


// Some
// 1.
const divBySev = nums.some(e => e % 7 === 0)
console.log(divBySev)
// 2.
const letAIn = panagram.some(c => c.includes("a"))
console.log(letAIn)