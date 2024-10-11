import winston, { Logger } from 'winston'

const setLogger = (): Logger => {
  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'email-sender.log' }),
    ],
  })
}

export default setLogger
