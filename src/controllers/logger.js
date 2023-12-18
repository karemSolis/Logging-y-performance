import winston from "winston";

const devLogger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports:[new winston.transports.Console()],
})

const prodLogger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports:[new winston.transports.File({ filename: 'logfile.log' })],
})

const logger = (process.env.ENV === "Production" ? prodLogger : devLogger)

export default logger 