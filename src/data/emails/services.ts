export const providers = {
  default: {
    alias: 'default',
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true' || true,
  },
  gmail: {
    alias: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  },
  mailgun: {
    alias: 'mailgun',
    host: 'smtp.mailgun.org',
    port: 465,
    secure: true,
  },
  ses: {
    alias: 'ses',
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 465,
    secure: true,
  },
  yahoo: {
    alias: 'yahoo',
    host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true,
  },
}

export type ProviderKey = keyof typeof providers
export const getMailProvider = (provider: ProviderKey) => {
  return providers[provider] || providers.default
}
