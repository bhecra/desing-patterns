class User1 implements IUser1Ops {

}
class User2 implements IUser2Ops {

}
class User3 implements IUser3Ops {

}

interface IUser1Ops {
  
}
interface IUser2Ops {

}
interface IUser3Ops {

}

class Ops {

  private _op1:IUser1Ops
  private _op2:IUser2Ops
  private _op3:IUser3Ops
  
}