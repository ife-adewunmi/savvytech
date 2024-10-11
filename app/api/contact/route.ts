import EmailSender from '@/utils/email-sender'
import { Logger } from 'winston'
import { RateLimiter } from '@/utils/rate-limiter'
import { NextRequest, NextResponse } from 'next/server'
import setLogger from '@/utils/logger'
import { RecaptchaProvider } from '@/utils/captcha-provider'

const logger: Logger = setLogger()

const limiter = new RateLimiter(5, 60 * 1000)

const emailSender = new EmailSender({
  provider: 'default',
  logger: logger,
  captchaProvider: new RecaptchaProvider(),
})

export async function POST(req: NextRequest) {
  const clientIp = req.ip || 'unknown'
  if (!limiter.check(clientIp)) {
    return NextResponse.json({ error: 'Too many requests', status: 429 })
  }

  try {
    const body = await req.json()

    if (!body || Object.keys(body).length === 0) {
      logger.warn('Empty request body')
      return NextResponse.json({ error: 'Empty request body', status: 400 })
    }

    const simulatedReq = {
      method: 'POST',
      body: body,
      headers: Object.fromEntries(req.headers),
    }

    const simulatedRes = {
      status: (statusCode: number) => ({
        json: (data: any) => ({ json: data, status: statusCode }),
      }),
      setHeader: () => {},
    }

    await emailSender.handleRequest(simulatedReq as any, simulatedRes as any)
    return NextResponse.json({ message: 'Email sent successfully', status: 200 })
  } catch (error) {
    logger.error('Unhandled error in email sending', { error })
    return NextResponse.json({ error: 'Internal server error', status: 500 })
  }
}
