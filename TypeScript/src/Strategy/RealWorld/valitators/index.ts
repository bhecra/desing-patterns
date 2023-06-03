import { EmailValidator } from "./email.validator";
import { MaxLengthValidator } from "./max-length";
import { MinLengthValidator } from "./min-length";
import { ValidationContext } from "./validator-strategy";

const email = "usuario@dominio.com";
const username = "user";
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