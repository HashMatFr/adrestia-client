import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

export const useValidationRules = () => {
  const { t } = useI18n()
  dayjs.extend(customParseFormat)

  const isEmpty = (value) => {
    if (value === null || value === undefined || value === '') {
      return true
    }
    if (Array.isArray(value) && value.length === 0) {
      return true
    }
    return false
  }

  const required = (value) => {
    if (
      (typeof value === 'string' && value.trim().length === 0) ||
      !value?.length
    ) {
      return t('errors.mandatoryField')
    }
    return true
  }

  const latinAlphabetOrDigits = (value: string) => {
    const possibleChars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let count = 0
    for (const char of value) {
      if (possibleChars.includes(char)) {
        count++
      }
    }
    if (count !== value.length) {
      return t('errors.invalidCharacter')
    }
    return true
  }

  const unicodeLettersOrDigits = (value: string) => {
    const unicodeLetterRegex = /\p{L}/u
    const unicodeDigitRegex = /\p{N}/u
    let count = 0
    for (const char of value) {
      if (unicodeLetterRegex.test(char) || unicodeDigitRegex.test(char)) {
        count++
      }
    }
    if (count !== value.length) {
      return t('errors.invalidCharacter')
    }
    return true
  }

  const alpha = (value) => {
    const hasAtLeastOneNumberRegex = /.*[0-9].*/
    if (hasAtLeastOneNumberRegex.test(value)) {
      return t('errors.mustNotContainANumber')
    }
    return true
  }

  const email = (value) => {
    /* eslint-disable no-useless-escape */
    const emailRE =
      /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
    if (isEmpty(value)) {
      return true
    }
    if (Array.isArray(value)) {
      if (!value.every((val) => emailRE.test(String(val)))) {
        return t('errors.email.invalid')
      }
      return true
    }
    if (!emailRE.test(String(value))) {
      return t('errors.email.invalid')
    }
    return true
  }

  const confirmedEmail = (value, target) => {
    if (value !== target) {
      return t('errors.email.matching')
    }
    return true
  }

  const emailShouldNotBeTheSameAsOld = (value, target) => {
    if (value === target) {
      return t('errors.email.sameAsOld')
    }
    return true
  }

  const min = (value, limit) => {
    if (!value || value.length < limit) {
      return t('errors.minLength', { limit })
    }
    return true
  }

  const max = (value, limit) => {
    if (!value?.length) {
      return true
    }
    if (value.length > limit) {
      return t('errors.maxLength', { limit })
    }
    return true
  }

  const passwordLength = (value, limit) => {
    if (!value || value.length < limit) {
      return t('errors.password.minLength', { limit })
    }
    return true
  }

  const usernameAlreadyExists = () => {
    return t('errors.alreadyUsed')
  }

  const invalidPassword = () => {
    return t('errors.password.incorrect')
  }

  const passwordShouldContainLowercaseLetter = (value) => {
    const hasAtLeastCapitalLetterRegex = /.*[a-z].*/
    if (!hasAtLeastCapitalLetterRegex.test(value)) {
      return t('errors.password.lowercaseLetter')
    }
    return true
  }

  const passwordShouldContainUppercaseLetter = (value) => {
    const hasAtLeastCapitalLetterRegex = /.*[A-Z].*/
    if (!hasAtLeastCapitalLetterRegex.test(value)) {
      return t('errors.password.uppercaseLetter')
    }
    return true
  }

  const passwordShouldContainANumber = (value) => {
    const hasAtLeastOneNumberRegex = /.*[0-9].*/
    if (!hasAtLeastOneNumberRegex.test(value)) {
      return t('errors.password.number')
    }
    return true
  }

  const passwordShouldContainsASpecialCharacter = (value) => {
    const hasAtLeastOneSpecialCharacterRegex =
      /.*\(|\)|\?|[|]|_|`|;|:|!|@|#|&|\*|\+|=.*/
    if (!hasAtLeastOneSpecialCharacterRegex.test(value)) {
      return t('errors.password.specialCharacter')
    }
    return true
  }

  const confirmPassword = (value, target) => {
    if (value !== target) {
      return t('errors.password.matching')
    }
    return true
  }

  const dateFormat = (value) => {
    const validDateFormat = RegExp(
      /^(0[1-9]|[12][0-9]|3[01])([/]|[-])(0[1-9]|1[012])([/]|[-])(19|20)\d\d$/,
    )
    const reverseValidDateFormat = RegExp(
      /^(19|20)\d\d([/]|[-])(0[1-9]|1[012])([/]|[-])(0[1-9]|[12][0-9]|3[01])$/,
    )
    const americanValidDateFormat = RegExp(
      /^(0[1-9]|1[012])([/]|[-])(0[1-9]|[12][0-9]|3[01])([/]|[-])(19|20)\d\d$/,
    )
    if (
      validDateFormat.test(value) ||
      reverseValidDateFormat.test(value) ||
      americanValidDateFormat.test(value)
    ) {
      return true
    } else {
      return t('errors.expectedDateFormat')
    }
  }

  const doesNotContainSpaces = (value) => {
    const whiteSpacesRegex = new RegExp(/\s/)
    if (whiteSpacesRegex.test(value)) {
      return t('errors.usernameContainsWhitespaces')
    }
    return true
  }

  const firstCharacterMustBeALetter = (value) => {
    const firstAlphaRegex = /^[a-zA-Z].*$/
    if (!firstAlphaRegex.test(value)) {
      return t('errors.usernameFirstCharacterMustBeALetter')
    }
    return true
  }

  return {
    required,
    unicodeLettersOrDigits,
    latinAlphabetOrDigits,
    alpha,
    email,
    confirmedEmail,
    emailShouldNotBeTheSameAsOld,
    min,
    max,
    passwordLength,
    usernameAlreadyExists,
    invalidPassword,
    passwordShouldContainLowercaseLetter,
    passwordShouldContainUppercaseLetter,
    passwordShouldContainANumber,
    passwordShouldContainsASpecialCharacter,
    confirmPassword,
    dateFormat,
    doesNotContainSpaces,
    firstCharacterMustBeALetter,
  }
}
