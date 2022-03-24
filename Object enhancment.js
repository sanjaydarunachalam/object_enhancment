//Same keys and values
function createInstructor(firstName, lastName){
    firstName,
    lastName
}

//Computed Property Names
let favoriteNumber = 42;

const instructor = {
    firstName:"Colt",
    [favoriteNumber]:"Thatis my favorite!"
}

//Object Methods
const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

//createAnimal function

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function animalObject(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}
