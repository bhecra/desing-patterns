import { hasBalancedBrackets } from './HasBalancedBrackets'

describe('Returns true if brackets match, otherwise reurns false', () => {
  it('should reuturn true ([{}])', () => {
    const isBalanced = hasBalancedBrackets('([{}])')

    expect(isBalanced).toBe(true)
  })

  it('should reuturn false ([{])', () => {
    const isBalanced = hasBalancedBrackets('([{])')

    expect(isBalanced).toBe(false)
  })
  it('should reuturn true ([]{}[])', () => {
    const isBalanced = hasBalancedBrackets('([]{}[])')

    expect(isBalanced).toBe(true)
  })
  it('should reuturn true ([a]{a}[d])', () => {
    const isBalanced = hasBalancedBrackets('([a]{a}[d])')

    expect(isBalanced).toBe(true)
  })
  it('should reuturn false ([a]{a}}[d])', () => {
    const isBalanced = hasBalancedBrackets('([a]{a}}[d])')

    expect(isBalanced).toBe(false)
  })
})
