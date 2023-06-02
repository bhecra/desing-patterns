const createErrorFactory = (name) => {
  return class BussinessError extends Error {
    constructor(message) {
      super();
      this.name = name;
      this.message = message;
    }
  }
}

const ValidationError = createErrorFactory('ValidationError')
const EmailError = createErrorFactory('EmailError')


const validateUser = ({name, age, email}) =>{

  console.log(name, age, email);

  console.log(email.includes('@'));
  if(!email.includes('@')) throw new EmailError('email no tiene @')
  if(!name) throw new ValidationError('name is required')
  if(!email) throw new EmailError('email is required')
  if(!age) throw new ValidationError('age is required')

}

const name = 'Chris'
const email = 'bhecragmail.com'
const age = 29


try {

  validateUser({ email, age})
  
} catch (error) {

  // console.error('error',error);
  // console.error('name: ',error.name);
  // console.error('message: ',error.message);

  if(error instanceof ValidationError){

    console.error('error',error);
    console.error('name: ',error.name);
    console.error('message: ',error.message);
  }
  if(error instanceof EmailError){

    console.error('error',error);
    console.error('name',error.name);
  }
  
}

