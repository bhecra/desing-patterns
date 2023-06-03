import { IValidator } from "./validator.interface";
import { EmailValidator } from "./email.validator";
import { MaxLengthValidator } from "./max-length";
import { MinLengthValidator } from "./min-length";


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


const email = "usuario@dominio.com";
const username = "use";
const context = new ValidationContext();
const usernameCtx = new ValidationContext();

// Agregar los validadores necesarios
context.addValidator(new EmailValidator());
context.addValidator(new MaxLengthValidator(19));
context.addValidator(new MinLengthValidator(5));

const emailVali = new EmailValidator()

emailVali.validate(email);

usernameCtx.addValidator(new MaxLengthValidator(7, 'El error me da la gana'));
usernameCtx.addValidator(new MinLengthValidator(4));

console.log(context.validate(email));
console.log(context.getErrorReport());
console.log(usernameCtx.validate(username));
console.log(usernameCtx.getErrorReport());
