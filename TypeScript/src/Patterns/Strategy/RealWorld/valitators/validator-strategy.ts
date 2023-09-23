import { ErrorReport, IValidator } from "./validator.interface";


// Clase de contexto que utiliza los validadores
export class ValidationStrategy<T> {

  private validators: IValidator<T>[];
  private errors: ErrorReport<T>[];

  constructor() {
    this.validators = [];
    this.errors = [];
  }

  addValidator(validator: IValidator<T>) {
    this.validators.push(validator);
  }

  validate(value: T) {
    for (const validator of this.validators) {
      const error = validator.validate(value);
      if (error) {
        this.errors.push({message:error, value});
      }
    }
    return this.errors.length === 0;
  }

  getErrorReport(): ErrorReport<T>[] {
    return this.errors;
  }
}

