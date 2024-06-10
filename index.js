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
