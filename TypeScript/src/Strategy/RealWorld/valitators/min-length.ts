import { IValidator } from "./validator.interface";

export class MinLengthValidator implements IValidator {

  private _minLength = null
  private _errorMesage = null;

  constructor(minLength: number) {
    this._minLength = minLength;
  }

  validate(value: string) {
    if (value.length < this._minLength) {
      return (
        this._errorMesage || 'El campo no cumple con la mínima longitud requerida'
      );
    }
    return null;

  }

}