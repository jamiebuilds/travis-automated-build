class Person {
  constructor({firstName, lastName, jobTitle} = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
  }

  sayHello() {
    return `Hi! My name is ${this.firstName} ${this.lastName} and I am a ${this.jobTitle}`;
  }
}

class Developer extends Person {
  constructor(firstName, lastName) {
    super({
      firstName,
      lastName,
      jobTitle: 'Developer'
    });
  }
}

let jamesKyle = new Developer({
  firstName: 'James',
  lastName: 'Kyle'
});

jamesKyle.sayHello();
