import nodemailer, { TransportOptions } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { NextApiRequest, NextApiResponse } from 'next'
import { validateAndSanitizeInput } from '@/utils/form-validator'
import { getMailProvider, ProviderKey } from '@/data/emails/services'
import { CaptchaProvider } from '@/utils/captcha-provider'

interface EmailSenderConfig {
  provider: ProviderKey
  logger: Logger
  captchaProvider: CaptchaProvider
}

interface Logger {
  info: (message: string, meta?: any) => void
  error: (message: string, meta?: any) => void
  warn: (message: string, meta?: any) => void
}

interface EmailFormData {
  name: string
  email: string
  message: string
  template: string
  captchaToken: any
}

export type EmailSenderAPIResponse = (req: NextApiRequest, res: NextApiResponse) => Promise<void>

class EmailSender {
  private formData: EmailFormData
  private transport: Mail
  private config: EmailSenderConfig

  constructor(config: EmailSenderConfig) {
    this.config = config
    this.setupTransport()
  }

  private setupTransport(): void {
    const mailProvider = getMailProvider(this.config.provider)
    this.transport = nodemailer.createTransport({
      host: mailProvider.host || process.env.SMTP_HOST,
      port: mailProvider.port || parseInt(process.env.SMTP_PORT!, 10),
      secure: mailProvider.secure || process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    } as TransportOptions)
  }

  private getEmailTemplate(): string {
    const { name, email, message, template } = this.formData
    switch (template) {
      case 'thank-you':
        return `
                    <div style="background: #f0f0f0; padding: 20px; font-family: Arial, sans-serif;">
                        <h1>Thank You for Contacting Us</h1>
                        <p>Dear ${name},</p>
                        <p>Thank you for reaching out to us. We've received your message and will get back to you shortly.</p>
                        <p>Your message:</p>
                        <blockquote style="background: #fff; padding: 10px; border-left: 5px solid #007bff;">
                            ${message}
                        </blockquote>
                        <p>Best regards,</p>
                        <p>Our Team</p>
                    </div>
                `
      case 'contact-form':
      default:
        return `
                    <div style="background: #1a202c; color: #fff; padding: 20px; font-family: Arial, sans-serif;">
                        <h1>New Contact Form Submission</h1>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: #2d3748; padding: 10px; border-radius: 5px;">
                            ${message}
                        </div>
                    </div>
                `
    }
  }

  async send(): Promise<void> {
    const { name, email, template } = this.formData
    const mailOptions: Mail.Options = {
      from: process.env.FROM_EMAIL,
      to: template === 'thank-you' ? email : process.env.TO_EMAIL,
      subject:
        template === 'thank-you'
          ? `Thank you for contacting us, ${name}`
          : `New contact form submission from ${name}`,
      html: this.getEmailTemplate(),
    }

    try {
      await this.transport.sendMail(mailOptions)
      this.config.logger.info(`Email sent successfully to ${mailOptions.to}`)
    } catch (error) {
      this.config.logger.error(`Error sending email to ${mailOptions.to}: ${error}`)
      throw new Error('Failed to send email')
    }
  }

  private async parseAndValidateBody(req: NextApiRequest): Promise<EmailFormData> {
    let body: any

    if (typeof req.body === 'string') {
      body = JSON.parse(req.body)
    } else if (typeof req.body === 'object') {
      body = req.body
    } else {
      throw new Error('Invalid request body format')
    }

    if (!body || Object.keys(body).length === 0) {
      throw new Error('Empty request body')
    }

    const { name, email, message, captchaToken, template = 'contact-form' } = body

    if (!name || !email || (template === 'contact-form' && (!message || !captchaToken))) {
      throw new Error('Missing required fields')
    }

    const { validatedName, validatedEmail, validatedMessage } = validateAndSanitizeInput(
      name,
      email,
      message
    )

    if (template === 'contact-form') {
      const isHuman = await this.config.captchaProvider.verify(captchaToken)
      if (!isHuman) {
        throw new Error('Captcha verification failed')
      }
    }

    return {
      name: validatedName,
      email: validatedEmail,
      message: validatedMessage,
      template,
      captchaToken,
    }
  }

  public handleRequest: EmailSenderAPIResponse = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST'])
      return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
      this.formData = await this.parseAndValidateBody(req)
      await this.send()
      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      this.config.logger.error('Failed to send email', { error })
      res.status(400).json({ error: error.message })
    }
  }
}

export default EmailSender
