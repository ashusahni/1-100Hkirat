import {describe, expect ,it} from '@jest/globals'
import { sum, multiply } from "../../index"

describe('testing sum functions', () => {

    it('it should show the sum of the product correctly  ', ()=>{
      const finalAns = sum(1,2)
      expect(finalAns).toBe(3)
    })

    it('it should show the - of the product correctly  ', ()=>{
      const finalAns = sum(-1,-2)
      expect(finalAns).toBe(-3)
    })
    it('it should show the - of the product correctly  ', ()=>{
      const finalAns = multiply(5,2)
      expect(finalAns).toBe(10)
    })
})
