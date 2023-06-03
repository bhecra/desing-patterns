import { EmailValidator } from "./email.validator";


describe('EmailValidator', () => {

  describe('vlidate', () => {
    it('should return null for a valid email', () => {
      const email = 'usuario@dominio.com';
      expect(new EmailValidator().validate(email)).toBe(null);
    });
    it('should return string for a invalid email', () => {
      const email = 'usuariodominio.com';
      expect(new EmailValidator().validate(email)).toBe('El email no cumple con la expresión solicitada');
    });
  })
})
