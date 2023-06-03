import { IValidator } from "./validator.interface";


// Clase de contexto que utiliza los validadores
export class ValidationContext {

  private validators: IValidator[];
  private errors: string[];

  constructor() {
    this.validators = [];
    this.errors = [];
  }

  addValidator(validator: IValidator) {
    this.validators.push(validator);
  }

  validate(value) {
    for (const validator of this.validators) {
      const error = validator.validate(value);
      if (error) {
        this.errors.push(error);
      }
    }
    return this.errors.length === 0;
  }

  getErrorReport() {
    return this.errors.join("\n");
  }
}

