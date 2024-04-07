class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  
  // Create instances of the Person class
  const person1 = new Person('pranav', 25, 'India');
  const person2 = new Person('rithi', 30, 'India');
  
  // Display details of person1
  console.log('Person Details:');
  person1.displayDetails();
  //calcutaing uber price
  const uber = {
    set kiloMeter(km){    
       this.price = `${km} km = Rs.${km * 50}` ;
    },
    get kiloMeter(){
       return this.price;
    }
}

const obj =uber.kiloMeter;
console.log(obj)