


const validateUser = ({name, age, email}) =>{

  console.log(name, age, email);

  if(!name) throw new ValidationError('name is required')
  if(!email) throw new ValidationError('email is required')
  if(!age) throw new ValidationError('age is required')

}

class ValidationError extends Error {
  constructor(message){
    super()
    this.name = 'ValidationError'
    this.message = message
  }
}
class ConectionError extends Error {
  constructor(){
    super()
    this.name = 'ConectionError'
    this.message = ''
  }
}

const name = 'Chris'
const email = 'bhecra@gmail.com'
const age = 29


try {

  validateUser({ email, age})
  
} catch (error) {

  if(error instanceof ValidationError){

    console.error('error',error);
    console.error('name: ',error.name);
    console.error('message: ',error.message);
  }
  if(error instanceof ConectionError){

    console.error('error',error);
    console.error('name',error.name);
  }
  
}