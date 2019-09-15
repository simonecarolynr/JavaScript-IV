class Person {
    constructor(personAttribs) {
        this.name = personAttribs.name;
        this.age = personAttribs.age;
        this.location = personAttribs.location;
    }
    
    speak(name, location) {
        console.log(`Hello, my name is ${this.name} and I'm from ${this.location}.`)
    }
    
};

class Instructor extends Person {
    constructor(instructorAttribs) {
        super(instructorAttribs);
        this.specialty = instructorAttribs.specialty;
        this.favLanguage = instructorAttribs.favLanguage;
        this.catchPhrase = instructorAttribs.catchPhrase;
    }
    
    demo(subject) {
        console.log(`Today we are learning about ${this.subject}`);
    }
    
    grade(student, subject) {
        console.log(`${this.student} recieves a perfect score on ${this.subject}`);
    }
};

class Student extends Person {
    constructor(studentAttribs) {
        super(studentAttribs);
        this.background = studentAttribs.background;
        this.className = studentAttribs.className;
        this.favSubjects = studentAttribs.favSubjects;
    }
    
    listsSubjects() {
        console.log(this.favSubjects);
    }

    PRAssignment(name, subject) {
        console.log(`${this.name} has sudmitted a PR fo ${this.subject}.`)
    } 

    sprintChallenge(name, subject) {
        console.log(`${this.name} has begun sprint challenge on ${this.subject}.`)
    }
};

class ProjectManager extends Instructor {
    constructor(pmAttribs) {
        super(pmAttribs);
        this.gradClassName = pmAttribs.gradClassName;
        this.favInstructor = pmAttribs.favInstructor;
    }

    standUp(name, channel) {
        console.log(`${this.name} annouces to ${this.channel}, @channel standup time!`);
    }

    debugsCode(name, studentName, subject) {
        console.log(`${this.name} debugs ${this.studentName}'s code on ${this.subject}`);
    }
}

const fred = new Instructor ({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

