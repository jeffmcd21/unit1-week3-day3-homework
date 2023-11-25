
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