export const getUTCDateFormat = (timestamp: number, format: string = 'dd/mm/yyyy') => {
  // Asegurarse de que el timestamp esté en milisegundos
  if (timestamp.toString().length < 13) {
    timestamp *= 1000
  }

  const date = new Date(timestamp)
  return format
    .replace('dd', `${date.getUTCDate()}`.padStart(2, '0'))
    .replace('mm', `${date.getUTCMonth() + 1}`.padStart(2, '0'))
    .replace('yyyy', `${date.getUTCFullYear()}`)
}