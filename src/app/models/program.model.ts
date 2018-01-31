export class Program {
    Id: string;
    Title: string;
    Duration: number;
    Type: number;
    Difficulty: number;
    Description: string;
    Sessions: Session[];
    constructor() {
      this.Sessions = new Array<Session>();
      this.Difficulty = 0;
      this.Type = 0;
    }
  }
  export class Session {
    Id: string;
    Title: string;
    Place: number;
    Exercises: Exercise[];
    constructor() {
      this.Exercises = new Array<Exercise>();
    }
  }
  export class Exercise {
    Id: string;
    Name: string;
    Difficulty: number;
    Place: number;
    constructor(
      Id: string,
      Name: string,
      Difficulty: number = 0,
      Place: number,
    ) {}
  }
