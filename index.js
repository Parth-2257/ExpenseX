// This is gonna be the Data Model of the Complete Project 
let data = [
    { sr: 1, amount: 200, category: "food" },
    { sr: 2, amount: 500, category: "travel" },
    { sr: 3, amount: 300, category: "travel" },
    { sr: 4, amount: 700, category: "living expenses" }
]

// Tasks to do for the project:-

// Add Expense
// calculate total expense 
// Filter Expense by Category 
// Remove Expense

// 1. Add Expense 
let obj = {sr: data.length+1 , amount: 300, category: "tickets"}
data.push(obj)
console.log(data)


// 2. Calculate Total Expense
let total = 0
for(let u of data){
    obj = u
    total = total + obj["amount"]
}
console.log(total)

// 3. Filter Expenses by Category





// 4. Remove Expenses
// let us assume that the user wants to delete the nth entry so 
let n = 2 
data.splice(n-1,1)
console.log(data)
