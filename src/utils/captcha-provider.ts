import axios from 'axios'

export interface CaptchaProvider {
  verify(token: string): Promise<boolean>
}

export class HCaptchaProvider implements CaptchaProvider {
  private readonly secretKey: string
  private readonly verifyUrl: string

  constructor() {
    this.secretKey = process.env.HCAPTCHA_SECRET_KEY || ''
    this.verifyUrl = 'https://hcaptcha.com/siteverify'

    if (!this.secretKey) {
      throw new Error('HCAPTCHA_SECRET_KEY is not set in the environment variables')
    }
  }

  async verify(token: string): Promise<boolean> {
    try {
      const response = await axios.post(this.verifyUrl, null, {
        params: {
          secret: this.secretKey,
          response: token,
        },
      })

      return response.data.success
    } catch (error) {
      console.error('Error verifying hCaptcha:', error)
      return false
    }
  }
}

export class RecaptchaProvider implements CaptchaProvider {
  private readonly secretKey: string
  private readonly verifyUrl: string

  constructor() {
    this.secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY || ''
    this.verifyUrl = 'https://www.google.com/recaptcha/api/siteverify'

    if (!this.secretKey) {
      throw new Error('RECAPTCHA_SECRET_KEY is not set in the environment variables')
    }
  }

  async verify(token: string): Promise<boolean> {
    try {
      const response = await axios.post(this.verifyUrl, null, {
        params: {
          secret: this.secretKey,
          response: token,
        },
      })

      return response.data.success
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error)
      return false
    }
  }
}

// You can add more captcha providers here in the future, e.g.:
// export class RecaptchaProvider implements CaptchaProvider { ... }
