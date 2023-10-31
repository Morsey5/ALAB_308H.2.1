class Cat {
    constructor(color, temperment, greediness ){
        this.color = color
        this.temperment = temperment
        this.greediness = greediness
    }


    //Method for Cats

    furColor(){
        console.log('Their fur is ${this.color}')
    }

    cuteKitty(){
        console.log('They are pretty ${this.temperment}, do with that info what you want.')
    }

    treat(){
        console.log(this.greediness)
    }

}

//Instances of Cat

const cat1 = new Cat(Grey, Docile, Greedy)
const cat2 = new Cat(Orange, Fiesty, Picky)

//Log Properties and invoked methods for cat1

for (const cat of cats) {
    console.log("\nProperties of the cat1:");
    console.log(`Fur Color: ${cat1.color}`);
    console.log(`Temperament: ${cat1.temperment}`);
    console.log(`Greediness: ${cat1.greediness}`);

    console.log("\nInvoking methods for the cat1:");
    cat.furColor();
    cat.cuteKitty();
    cat.treat();
}
//Log Properties and invoked methods for cat2

for (const cat of cats) {
    console.log("\nProperties of the cat2:");
    console.log(`Fur Color: ${cat2.color}`);
    console.log(`Temperament: ${cat2.temperment}`);
    console.log(`Greediness: ${cat2.greediness}`);

    console.log("\nInvoking methods for the cat2:");
    cat.furColor();
    cat.cuteKitty();
    cat.treat();
}
//__________________________________________________________________




class Pirate {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
 
  }


  //Method for Pirates


  introduce(){
    console.log('Arg , I am ${this.name}, I am ${this.age}-Years-old, and I have been a Pirate for ${this.experience} Years.')
  }

  brag(){
    console.log('I have been a Pirate for ${this.experience} years now, respect your superiors rookie!!')
  }

  reciteName(){
    console.log('Ey Captin, my name is ${this.name}, sir!')
  }
}

const jollyRoger = [
    new Pirate("Cap", 45, 12),
    new Pirate("Scurvy Joe", 30, 3),
    new Pirate("One-Eyed Pete", 35, 6)
];

const blackPearl = [
    new Pirate("Sparrow", 40, 8),
    new Pirate("Lassy", 28, 3),
    new Pirate("Peg Leg", 50, 20)
];

function loopThroughPirates(pirates) {
    for (const pirate of pirates) {
        console.log("\nProperties of the pirate:");
        console.log(`Name: ${pirate.name}`);
        console.log(`Age: ${pirate.age}`);
        console.log(`Experience: ${pirate.experience} years`);

        console.log("\nInvoking methods for the pirate:");
        pirate.introduce();
        pirate.brag();
        pirate.reciteName();
    }
}

console.log("Jolly Roger Pirates:");
loopThroughPirates(jollyRoger);

console.log("\nBlack Pearl Pirates:");
loopThroughPirates(blackPearl);
