class Person {
    constructor (firstname, lastname, favoriteColor, favoriteNumber, food) {
        this.firstName = firstname
        this.lastName = lastname
        this.favoriteColor = favoriteColor
        this.favoriteNumber = favoriteNumber
        this.food = food
        this.family = [];
    }
}

Person.prototype.fullName = function () {
    return this.firstName + this.lastName;
}

Person.prototype.toString = function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.favoriteColor + ' ' + this.favoriteNumber;
  };

Person.prototype.addToFamily = function(person) {
    if(person instanceof Person && !this.family.includes(person)) {
      this.family.push(person);
    }
    return this.family.length;
  };

let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
let craig = new Person("Craig", "Olive", "Blue", 12,)
let dave = new Person("Dave", "Oliver", "Red", 22,)
let kev = new Person("Kev", "Oliver", "Purple", 21,) 

console.log(peter.fullName());
console.log(peter.toString());
console.log(craig.toString());
console.log(peter.addToFamily(kev));
console.log(peter.addToFamily(dave));
console.log(peter.addToFamily(kev));
