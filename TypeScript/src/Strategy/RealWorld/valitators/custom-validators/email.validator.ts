import { IValidator } from '../validator.interface';

export class EmailValidator implements IValidator<string> {
  private _regExp = null;
  private _errorMesage = null;
  constructor({regExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMesage=''} = {}) {
    this._regExp = regExp;
    this. _errorMesage = errorMesage;
  }
  validate(email: string): string {
    const emailRegex = this._regExp;

    if (!emailRegex.test(email)) {
      return this._errorMesage || 'El email no cumple con la expresión solicitada';
    }

    return null;
  }
}
