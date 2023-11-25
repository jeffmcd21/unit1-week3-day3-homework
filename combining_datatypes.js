
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
    // Creating another function inside the first on that logs a statement
    function options() {
        // Logging a statement
        console.log("Select a song");
    }
    // Returning the sub function
    return options;
}

// Envoking the primary function and storing the results in a variable
const powerButtontoggle = powerButton();
// Envoking the variable
powerButtontoggle()


