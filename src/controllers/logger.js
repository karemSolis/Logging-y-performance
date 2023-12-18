import winston from "winston";

const devLogger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console({ level: 'debug' }),
        new winston.transports.File({ filename: 'errors.log', level: 'error' })
    ],
    
})

const prodLogger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.File({ filename: 'logfileprod.log', level: 'info' }),
        new winston.transports.File({ filename: 'errors.log', level: 'error' })
    ],

})

const logger = (process.env.ENV === "Production" ? prodLogger : devLogger)

export default logger 