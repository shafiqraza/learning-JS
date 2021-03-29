/*
  MAP
*/
// const questions = new Map();
// questions.set("question", "What is 2+2= ?");
// questions.set("a", "2");
// questions.set("b", "5");
// questions.set("c", "4");
// questions.set("correctAns", "4");
// questions.set(true, "Correct answer, Good job!");
// questions.set(false, "Wrong answer, please try again");
// console.log(questions);
// questions.forEach((el, index) => {
//   if(index === "question" || index === "a" || index === "b" || index === "c") {
//     console.log(`${index}: ${el}`);
//   }
// });

// const value = prompt("Write the correct Answer!")

// console.log(questions.get(value === questions.get("correctAns")));

// for(let item of questions) {
//   console.log(item);
// }


// const contacts = new Map();
// contacts.set("Jessie", {
//   phone: "+935254512",
//   address: "123 street LA",
//   birthYear: 1999,
//   calcAge: (birthYear) => {
//     return 2021 - birthYear; 
//   }
// });

// contacts.set("Cassy", {
//   phone: "+935254512",
//   address: "123 street LA"
// });

// const jessieBirthYear = contacts.get("Jessie").birthYear;
// console.log(contacts.get("Jessie").calcAge(jessieBirthYear));



/*
CLASSES
*/

// class Person {
//   constructor(name, job, birthYear) {
//     this.name = name;
//     this.job = job;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     let currentYear = new Date().getFullYear();
//     return currentYear - this.birthYear
//   }
// }

// const p1 = new Person("John", "designer", 1990);

// console.log(p1.calcAge());



/*
SUB-CLASSES
*/
// ES5
// var Person5 = function(name, job, birthYear) {
//   this.name = name;
//   this.job = job;
//   this.birthYear = birthYear;
// };

// Person5.prototype.calAge = function() {
//   let year = new Date().getFullYear();
//   return year - this.birthYear;
// }

// var Athlete5 = function(name, job, birthYear, olampicsGames, medals) {
//   Person5.call(this, name, job, birthYear)
//   this.medals = medals;
//   this.olampicsGames = olampicsGames;
// };

// Athlete5.prototype.addMedal = function() {
//   this.medals++
//   return this.medals;
// }

// var johnAthlete5 = new Athlete5("Jane", "teacher", 1990, 3, 5);
// console.log(johnAthlete5.addMedal());
// console.log(johnAthlete5);
// // ES6
// class Person6 {
//   constructor(name, job, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//   }

//   calAge() { 
//     let year = new Date().getFullYear();
//     return year -  this.birthYear;
//   }
// }

// class Athlete6 extends Person6 {
//   constructor(name, job, birthYear, olampicsGames, medals) {
//     super(name, job, birthYear)
//     this.medals = medals;
//     this.olampicsGames = olampicsGames;
//   }

//   addMedal() { 
//     return this.medals++
//   }
// }

// const johnAthlete6 = new Athlete6("john", "swimmer", 1995, 2, 5);
// console.log(johnAthlete6.addMedal());
// console.log(johnAthlete6);

/*
  CHALLENGE
*/

// class Element {
//   constructor(name, buildYear) {
//     this.name = name;
//     this.buildYear = buildYear;
//   }
// }

// class Park extends Element {
//   constructor(name, buildYear, trees, area) {
//     super(name, buildYear);
//     this.trees = trees;
//     this.area = area;
//   }

//   treesDensity() {
//     let density = this.trees / this.area;
//     console.log(`${this.name} has trees density of ${density}.`);
//     if(density >= 1000) console.log(`${this.name} has more then 1000 trees density.`);
//   }

//   parkAge() {
//     let year = new Date().getFullYear();
//     return year - this.buildYear;
//   }
// }

// class Street extends Element {
//   constructor(name, buildYear, length, size = 3) {
//     super(name, buildYear);
//     this.size = size;
//     this.length = length;
//   }

//   classification() {
//     const sizeClassy = new Map()
//     sizeClassy.set(1, 'tinny');
//     sizeClassy.set(2, 'small');
//     sizeClassy.set(3, 'normal');
//     sizeClassy.set(4, 'big');
//     sizeClassy.set(5, 'huge');

//     console.log(`The ${this.name} is built in ${this.buildYear} its a ${sizeClassy.get(this.size)} street.`);
//   }
// }

// const allStreets = [
//   new Street("Al-Nas Street", 1990, 20, 1),
//   new Street("Zainab Street", 1990, 40, 2),
//   new Street("Faisal Street", 1990, 45),
//   new Street("ABC Street", 1990, 80, 5)
// ];

// const allParks = [
//   new Park("Safari Park", 1995, 265, 1.5),
//   new Park("Safari Park", 2005, 265, .8),
//   new Park("Natinal Park", 1970, 5065, 3)
// ];

// const calc = (arr) => {
//   let sum = arr.reduce((prev, cur, index) => (prev + cur) ,0)
  
//   return [sum, sum / arr.length];
// }

// const parksReport = (parks) => {
//   console.log("--------- PARKS REPORT -------------");
//   // density
//   parks.forEach(park => {
//     park.treesDensity();
//   });
//   // average age of 3 parks
//   var ages = parks.map(park => park.parkAge())
//   const [totalAge, average] = calc(ages);
//   console.log(`The average age of our 3 parks is ${average}`);
// };

// const streetReport = (streets) => {
//   console.log("------------ STREETS REPORT -----------------");
//   let allLength = streets.map(st => st.length);
//   // total and average length
//   const [totalLength, averageLength] = calc(allLength);
//   console.log(`The total length of 4 streets are ${totalLength} and average length of ${averageLength}`);

//   // classification of all strees
//   streets.forEach(st => {
//     // console.log(st.classification())
//     st.classification();
//   });
// };

// parksReport(allParks);
// streetReport(allStreets);

/* 
  ASYNC JS
*/

// const getRecipe = () => {
//   setTimeout(() => {
//     const recipeId = 242;
//     console.log(recipeId);
//     setTimeout(() => {
  //       const recipe = {
//     setTimeout(() => {
//       const recipe = {
//         id: recipeId,
//         title: "Fresh Tomato Pizza",
//         pushlisher: "Jessie"
//       }
//       setTimeout(() => {
//         const recipe2 = {
//           id: 2544,
//           title: "Mojito Pizza",
//           pushlisher: "Jessie"
//         }
//         console.log(recipe2);
//       }, 1500, recipe.pushlisher);
//       console.log(recipe);
//     }, 1500, recipeId);
//   }, 1500);

// }
// getRecipe();


// const getId = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout((id) => {
//       resolve(id);
//     }, 1500, id);
//   });
// }

// const getRecipe = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id,
//         title: "Fresh tomato Pizza",
//         publisher: "Jessica"
//       });
//     }, 1500, id);
//   });
// }

// const getRelated = (publisher) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id: 1500,
//         title: "Italian Pizza",
//         publisher
//       });
//     }, 1500, publisher);
//   })
// }
// ES6
// getId(1550)
// .then((id) => {
//   console.log(id);
//   return getRecipe(id)
// })
// .then(recipe => {
//   console.log(recipe);
//   return getRelated(recipe.publisher)
// })
// .then(relatedRec => {
//   console.log(relatedRec);
// })
// .catch((err) => {
//   console.log(err);
// });


// ES8
// async function getRecipeAsync() {
//   const id = await getId(1500);
//   // console.log(id); 
//   const recipe = await getRecipe(id);
//   // console.log(recipe);
//   const related = await getRecipe(recipe.publisher);
//   console.log(related);

//   // return recipe;

//   // const data = new Map();
//   // data.set("id", id);
//   // data.set("recipe", recipe);
//   // data.set("related", related);
//   // return data;
// }
// // getRecipeAsync().then(res => {
// //   console.log(res);
// // });
// getRecipeAsync();


const getWeather = (woid) => {
  fetch(`https://sabzify.pk/api/product?api_token=ce30a2925c27e785a8194aaf51bcc20594a84f911fecb4abb23c3ab16a4af629`)
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

getWeather(44418);

// function reqListener () {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://crossorigin.me/https://www.metaweather.com/api/location/44418/");
// oReq.send();