/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(characterAttributes) {
      this.name = characterAttributes.name;
      this.dimensions = characterAttributes.dimensions;
      this.createdAt = characterAttributes.createdAt;
  }
  destroy(name) {
      console.log(`${this.name} was removed from the game.`);
  }
}

class CharacterStats extends GameObject {
  constructor(characterStats) {
    super(characterStats);
    this.healthPoints = characterStats.healthPoints;
  }
  takeDamage(name) {
      console.log(`${this.name} took damage.`);
  }
}


class Humanoid extends CharacterStats {
  constructor(characterClass) {
      super(characterClass)
      this.team = characterClass.team;
      this.weapons = characterClass.weapons;
      this.language = characterClass.language;
  }
  
  greet(name, language) {
      console.log(`${this.name} offers a greeting in ${this.language}.`);
  }
}

 const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',

  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',

  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',

  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
