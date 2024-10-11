import validator from 'validator'
import DOMPurify from 'isomorphic-dompurify'

interface ValidatedInput {
  validatedName: string
  validatedEmail: string
  validatedMessage: string
}

export function validateAndSanitizeInput(
  name: string,
  email: string,
  message: string
): ValidatedInput {
  if (!validator.isLength(name, { min: 2, max: 50 })) {
    throw new Error('Name must be between 2 and 50 characters long')
  }
  const validatedName = DOMPurify.sanitize(name.trim())

  if (!validator.isEmail(email)) {
    throw new Error('Invalid email address')
  }
  const validatedEmail = validator.normalizeEmail(email.toLowerCase())

  if (!validator.isLength(message, { min: 10, max: 1000 })) {
    throw new Error('Message must be between 10 and 1000 characters long')
  }
  const validatedMessage = DOMPurify.sanitize(message.trim())

  return <ValidatedInput>{ validatedName, validatedEmail, validatedMessage }
}
