import { IValidator } from "./validator.interface";

export class MaxLengthValidator implements IValidator {

  private _maxLength = null
  constructor(maxLength: number) {
    this._maxLength = maxLength;
  }

  validate(value: string) {
    return value.length <= this._maxLength;
  }
}