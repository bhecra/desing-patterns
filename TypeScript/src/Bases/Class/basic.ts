class Avenger {

  public realName: string;
  static age: number;

  /**
   *
   */
  constructor(private name:string, public team:string, realName?:string) {
    this.realName = realName;    
  }

}

const antman = new Avenger('Antman','Capitan', 'Scott-lang');

console.log(antman);
