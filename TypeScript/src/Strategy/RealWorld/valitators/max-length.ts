import { IValidator } from './validator.interface';

export class MaxLengthValidator implements IValidator {
  private _maxLength = null;
  private _errorMesage = null;
  constructor(maxLength: number, errorMesage?: string) {
    this._maxLength = maxLength;
    this._errorMesage = errorMesage;
  }

  validate(value: string) {
    if (value.length > this._maxLength) {
      return (
        this._errorMesage || 'El campo excede la máxima longitud requerida'
      );
    }
    return null;
  }
}
