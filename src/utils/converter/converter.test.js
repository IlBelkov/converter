import { firstToSecond, secondToFirst } from './converter'

describe('when converting rub to usd', () => {
  it('should return a correct converted amount', () => {
    const result = firstToSecond(10,50)
    expect(result).toEqual(0.2)
  })
})

describe('when converting usd to rub', () => {
  it('should return a correct converted amount', () => {
    const result = secondToFirst(10,50)
    expect(result).toEqual(500)
  })
})
