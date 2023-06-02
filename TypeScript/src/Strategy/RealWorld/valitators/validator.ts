import { IValidator } from "./validator.interface";
import { EmailValidator } from "./email.validator";
import { MaxLengthValidator } from "./max-length";
import { MinLengthValidator } from "./min-length";


// Clase de contexto que utiliza los validadores
export class ValidationContext {

  private validators: IValidator[];

  constructor() {
    this.validators = [];
  }

  addValidator(validator: IValidator) {
    this.validators.push(validator);
  }

  validate(value) {
    for (const validator of this.validators) {
      if (!validator.validate(value)) {
        return false;
      }
    }
    return true;
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

usernameCtx.addValidator(new MaxLengthValidator(7));
usernameCtx.addValidator(new MinLengthValidator(4));

console.log(context.validate(email));
console.log(usernameCtx.validate(username));
