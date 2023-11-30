import { Reporter, FullConfig, Suite, TestCase, TestError, TestResult, TestStep } from "@playwright/test/reporter";
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
            logger.info(`=========================== logs ===========================`)
            logger.info(`Test Case Completed: ${test.title}: ${result.status.toUpperCase()}`);
            logger.info(`Error: ${result.error?.message}`);
        }
    }

    /**
     * Logs the execution of each test step if it belongs to the "test.step" category.
     * @param test - The test case.
     * @param result - The test result.
     * @param step - The test step.
     */
    onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
        if (step.category === 'test.step') {
            logger.info(`Executing Step: ${step.title}`);
        }
    }

    /**
     * Logs the error message when an error occurs during the test execution.
     * @param error - The test error.
     */
    onError(error: TestError): void {
        logger.info(error.message)
    }
}