import { getUTCDateFormat } from "./format.date"

describe('Returns the date in the specified format', () => {
  // Returns the date in the specified format.
  it('should return the date in the specified format', () => {
    const timestamp = 1630435200 // August 31, 2021
    const format = 'dd/mm/yyyy'
    const result = getUTCDateFormat(timestamp, format)
    expect(result).toBe('31/08/2021')
  })
  it('should return the date in the specified format', () => {
    const timestamp = 1672532233 // August 31, 2021
    const format = 'dd/mm/yyyy'
    const result = getUTCDateFormat(timestamp, format)
    expect(result).toBe('01/01/2023')
  })
  it('should return the date in the specified format', () => {
    const timestamp = 1672532233 // August 31, 2021
    const format = 'dd-mm-yyyy'
    const result = getUTCDateFormat(timestamp, format)
    expect(result).toBe('01-01-2023')
  })
  it('should return the date in the specified format', () => {
    const timestamp = 1672532233 // Enero 01, 2023
    const format = 'yyyy-mm-dd'
    const result = getUTCDateFormat(timestamp, format)
    expect(result).toBe('2023-01-01')
  })
  it('should return the date in the specified format', () => {
    const timestamp = 1672532233000 // Enero 01, 2023
    const format = 'yyyy-mm-dd'
    const result = getUTCDateFormat(timestamp, format)
    expect(result).toBe('2023-01-01')
  })
})