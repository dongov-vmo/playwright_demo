import { Reporter, FullConfig, Suite, TestCase, TestError, TestResult, TestStep, FullResult } from "@playwright/test/reporter";
import { createLogger, format, transports } from 'winston';

import { existsSync, mkdirSync } from 'fs';
import winston from 'winston';
const logDir = 'logs';

if (!existsSync(logDir)) {
    mkdirSync(logDir);
}

const logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        new transports.Console({
            format: winston.format.combine(
                winston.format.uncolorize({ level: true, message: true, raw: true }),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.align(),
                winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
            ),
        }),
        new transports.File({
            filename: 'logs/info.log',
            format: winston.format.combine(
                winston.format.uncolorize({ level: true, message: true, raw: true }),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.align(),
                winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
            ),
        }),
    ],
});

export default class MyReporter implements Reporter {
    /**
     * Logs the completion of each test case and its status.
     * @param test - The test case.
     * @param result - The test result.
     */
    onTestEnd(test: TestCase, result: TestResult): void {
        if (result.status != "passed") {
           ` \n`
            logger.info(`##############################################################################`)
            logger.info(`Test Case Completed: ${test.title.toUpperCase()}: ${result.status.toUpperCase()}`);
            logger.info(`##############################################################################`)
            if (result.status === "failed") {
                logger.info(`${result.error?.stack}`);
                logger.info(`${result.error?.snippet}`);
            } else {
                logger.info(`Error: ${result.error?.message}`);
                logger.info(`${(result.errors[1]?.message)}`);
                logger.info(`${(result.errors[1]?.snippet)}`);
                logger.info(`${(result.errors[1]?.stack)}`);
            }
        }
    }

}