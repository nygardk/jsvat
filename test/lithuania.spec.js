import {lithuania} from '../dist/index'
import {codes, invalid, name, valid} from './countries_vat_lists/lithuania.vat'
import {addCharsToString, checkInValidVat, checkValidVat} from './utils'

describe('Lithuania.', () => {

  it('should return true result for valid VATs', () => {
    valid.forEach(vat => checkValidVat(vat, [lithuania], codes, name))
  })

  it('should return true result for valid VATs with extra dash characters', () => {
    valid
      .map(vat => addCharsToString(vat, '-'))
      .forEach(vat => checkValidVat(vat, [lithuania], codes, name))
  })

  it('should return true result for valid VATs with extra space characters', () => {
    valid
      .map(vat => addCharsToString(vat, ' '))
      .forEach(vat => checkValidVat(vat, [lithuania], codes, name))
  })

  it('should return false result for invalid VATs', () => {
    invalid.forEach(vat => checkInValidVat(vat, [lithuania]))
  })

})
