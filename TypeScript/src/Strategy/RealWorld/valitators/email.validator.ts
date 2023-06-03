import { IValidator } from './validator.interface';

export class EmailValidator implements IValidator {
  private _regExp = null;
  private _errorMesage = null;
  constructor(regEx: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMesage?: string) {
    this._regExp = regEx;
  }
  validate(email: string): string {
    const emailRegex = this._regExp;

    if (emailRegex.test(email)) {
      return this._errorMesage || 'El email no cumple con la expresión pedida';
    }

    return null;
  }
}
