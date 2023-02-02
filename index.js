//Make sure to require your model so you can connect to the DB
const { Model } = require("mongoose");
const vikingModel = require("./models/User");

//This line of code connects to the Database
require("./db");

//Iteration 2:
const Lagertha = {
    firstName : "Lagertha",
    familyName : "Queen",
    strength : 8,
    weapon: "sword"
  };

//   vikingModel.create(Lagertha)
//   .then ((newViking) =>{
//     console.log("New viking was created", newViking)
//   })
//   .catch((err) => console.log('There was an error creating the Viking', err))

//Iteration 3:
// vikingModel.findByIdAndDelete('63dba28049294576a941b44a')
// .then((deletedViking) => {
//     console.log('Viking was deleted', deletedViking)
// })
// .catch((err) => console.log('There was an error deleting the Viking', err))

// creatting an array 
const vikingsArray = [
    {
    firstName : "Lagertha",
    familyName : "Queen",
    strength : 8,
    weapon: "sword"
  },{
    firstName : "Floki",
    familyName : "Ship Builder",
    strength : 6,
    weapon: "axe"
  },{
    firstName : "Ragnar",
    familyName : "King",
    strength : 9,
    weapon: "sword"
  }
];

// vikingModel.insertMany(vikingsArray)
// .then((vikingsArr) => {
//     console.log('Array was inserted', vikingsArr)
// })
// .catch((err) => console.log('There was an error inserting the arrya', err))


// Updating a viking
vikingModel.findByIdAndUpdate ('63dba83a5a1443219ed3204c', { strength: 1000})
.then((updatedViking) => {
    console.log('Viking was updated', updatedViking)
})
.catch((err) => console.log('There was an error updating the viking', err))