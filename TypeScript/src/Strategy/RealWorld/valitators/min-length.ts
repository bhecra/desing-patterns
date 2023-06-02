import { IValidator } from "./validator.interface";

export class MinLengthValidator implements IValidator {

  private _minLength = null
  constructor(minLength: number) {
    this._minLength = minLength;
  }

  validate(value: string) {
    return value.length >= this._minLength;
  }
  
}