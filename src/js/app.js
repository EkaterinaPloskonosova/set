// eslint-disable-next-line max-classes-per-file
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}
export const charact1 = new Character('Character1');
export const charact2 = new Character('Character2');
export const charact3 = new Character('Character3');
