import EmailSender from '@/utils/email-sender'
import { Logger } from 'winston'
import setLogger from '@/utils/logger'
import { RecaptchaProvider } from '@/utils/captcha-provider'
import { NextRequest, NextResponse } from 'next/server'

const logger: Logger = setLogger()

const emailSender = new EmailSender({
  provider: 'default',
  logger: logger,
  captchaProvider: new RecaptchaProvider(),
})

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method Not Allowed', status: 405 })
  }

  try {
    const body = await req.json()
    body.template = 'thank-you'

    const res = {
      status: (statusCode: number) => ({
        json: (data: any) => ({ statusCode, data }),
      }),
      setHeader: () => {},
    }

    await emailSender.handleRequest({ method: 'POST', body } as any, res as any)
    return NextResponse.json({ message: 'Thank you email sent successfully', status: 200 })
  } catch (error) {
    logger.error('Unhandled error in thank-you email sending', { error })
    NextResponse.json({ error: 'Internal server error', status: 500 })
  }
}
