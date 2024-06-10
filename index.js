console.log("Esercizio 1");
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  ageCompare(ageUserCompare) {
    if (this.age === ageUserCompare.age) {
      return "hanno la stessa età";
    } else if (this.age > ageUserCompare.age) {
      return "il primo utente è più grande";
    } else {
      return "il secondo utenete è più grande";
    }
  }
}
const user1 = new User("Mirko", "Abozzi", 33, "Sardegna");
const user2 = new User("Mario", "Rossi", 50, "Lazio");
console.log(user1);
console.log(user2);
console.log(user1.ageCompare(user2));

console.log("Esercizio 2");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.brees = breed;
  }
  ownerCompare(owner) {
    if (this.ownerName === owner) {
      return "i due animali hanno lo stsso padrone";
    } else {
      return "i padroni sono diversi";
    }
  }
}

const form = document.getElementById("petForm");
console.log(form);

form.onsubmit = function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  console.log(petName);
  console.log(ownerName);
  console.log(species);
  console.log(breed);
  const newPet = new Pet(petName, ownerName, species, breed);
  console.log(newPet);
};
