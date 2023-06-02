import { IValidator } from "./validator.interface";

export class EmailValidator implements IValidator{

  private _regExp = null
  constructor(regEx: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/) {
    this._regExp = regEx;
  }
  validate(email: string): boolean {
    const emailRegex = this._regExp;

    return (emailRegex.test(email)) 

  }
  
}