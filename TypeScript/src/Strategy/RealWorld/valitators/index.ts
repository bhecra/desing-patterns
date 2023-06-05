import { EmailValidator } from "./custom-validators/email.validator";
import { MaxLengthValidator } from "./custom-validators/max-length";
import { MinLengthValidator } from "./custom-validators/min-length";
import { ValidationStrategy } from "./validator-strategy";

const email = "usuario@dominio.com";
const username = "use";
const context = new ValidationStrategy();
const usernameCtx = new ValidationStrategy();

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