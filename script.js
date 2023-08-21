class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  ageverify(user) {
    if (this.age > user.age) {
      console.log(this.firstName + " e' piu' vecchio di " + user.firstName);
    } else {
      console.log(user.firstName + " e' piu' vecchio di " + this.firstName);
    }
  }
}

const u1 = new User("Darth", "Sidius", 123, "Death Star");
const u2 = new User("Obi Wan", "Kenobi", 44, "Tatooine");

console.log(u1);
console.log(u2);
u2.ageverify(u1);

class pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  ownerverify(owners) {
    for (let i = 0; i < owners.length; i++) {
      if (this.ownerName === owners[i]) {
        console.log(this.ownerName + " ha piu di un animale");
        return true;
      }
    }
  }
}

const data1 = document.getElementById("petName");
const data2 = document.getElementById("ownerName");
const data3 = document.getElementById("species");
const data4 = document.getElementById("breed");
const datalocation = document.getElementById("petcont");
const ownerslist = [];
const petlist = [];

function submitregister(ev) {
  ev.preventDefault();
  const input1 = data1.value;
  const input2 = data2.value;
  const input3 = data3.value;
  const input4 = data4.value;
  let evpet = new pet(input1, input2, input3, input4);
  petlist.push(evpet);
  const appended = document.createElement("div");
  const child1 = document.createElement("p");
  child1.innerText = input1;
  const child2 = document.createElement("p");
  child2.innerText = input2;
  const child3 = document.createElement("p");
  child3.innerText = input3;
  const child4 = document.createElement("p");
  child4.innerText = input4;
  appended.appendChild(child1);
  appended.appendChild(child2);
  appended.appendChild(child3);
  appended.appendChild(child4);
  datalocation.appendChild(appended);
  evpet.ownerverify(ownerslist);
  ownerslist.push(input2);
  console.log(ownerslist);
  console.log(petlist);
}

document.addEventListener("submit", submitregister);
