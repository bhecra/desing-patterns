namespace Validations {
  const validateText = (text: string): boolean => {
    return text.length > 3

  }
  const validateDate = (mydate: Date): boolean => {
    return !isNaN(mydate.valueOf()) 

  }
}